import { expect, test } from '@playwright/test'

const openApp = async (page, viewport) => {
  await page.setViewportSize(viewport)
  await page.goto('/')
  await page.getByRole('dialog', { name: 'Commissione da versare' }).waitFor()
}

test('desktop commission screen matches the approved visual baseline', async ({ page }) => {
  await openApp(page, { width: 1440, height: 1000 })

  await expect(page).toHaveScreenshot('commission-desktop.png', {
    animations: 'disabled',
    maxDiffPixelRatio: 0.01,
  })
})

test('mobile commission screen matches the approved visual baseline', async ({ page }) => {
  await openApp(page, { width: 390, height: 844 })

  await expect(page).toHaveScreenshot('commission-mobile.png', {
    animations: 'disabled',
    maxDiffPixelRatio: 0.01,
  })
})

test('320px viewport contains the entire dialog without horizontal overflow', async ({ page }) => {
  await openApp(page, { width: 320, height: 800 })

  const viewportGeometry = await page.evaluate(() => {
    const dialog = document.querySelector('[role="dialog"]')
    const rectangle = dialog.getBoundingClientRect()
    return {
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
      left: rectangle.left,
      right: rectangle.right,
    }
  })

  expect(viewportGeometry.documentWidth).toBeLessThanOrEqual(viewportGeometry.viewportWidth)
  expect(viewportGeometry.left).toBeGreaterThanOrEqual(0)
  expect(viewportGeometry.right).toBeLessThanOrEqual(viewportGeometry.viewportWidth)
})

test('keyboard user completes the commission flow', async ({ page }) => {
  await openApp(page, { width: 390, height: 844 })

  await page.getByRole('button', { name: 'Vai alle coordinate' }).focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('dialog', { name: 'Coordinate di pagamento' })).toBeVisible()
  await page.getByRole('button', { name: 'Conferma pagamento' }).focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('dialog', { name: 'Pagamento confermato' })).toBeVisible()
  await page.getByRole('button', { name: 'Torna alla home' }).focus()
  await page.keyboard.press('Enter')

  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page.getByRole('button', { name: 'Vai alla commissione' })).toBeFocused()
})
