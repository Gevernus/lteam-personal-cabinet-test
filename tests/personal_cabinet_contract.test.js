import { render, screen, within } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import App from '../src/App.vue'

const renderFlow = () => render(App)

describe('commission flow contract', () => {
  // A wrong initial state would make the submitted test show an unrelated screen.
  it('opens on the commission step with the specified immutable fee breakdown', () => {
    renderFlow()

    const dialog = screen.getByRole('dialog', { name: 'Commissione da versare' })
    expect(within(dialog).getByRole('heading', { name: 'Commissione da versare' })).toBeVisible()
    expect(within(dialog).getByText('37 €')).toBeVisible()
    expect(within(dialog).getByText('IVA 22%')).toBeVisible()
    expect(within(dialog).getByText('6,67 €')).toBeVisible()
    expect(within(dialog).getByText('Servizi selezione')).toBeVisible()
    expect(within(dialog).getByText('18,20 €')).toBeVisible()
    expect(within(dialog).getByText('Firma digitale')).toBeVisible()
    expect(within(dialog).getByText('12,13 €')).toBeVisible()
    expect(within(dialog).getByText('2. COMMISSIONE')).toHaveAttribute('aria-current', 'step')
  })

  // CTA wiring can regress while both panels still render correctly in isolation.
  it('advances to exact payment coordinates and marks the third step current', async () => {
    const user = userEvent.setup()
    renderFlow()

    await user.click(screen.getByRole('button', { name: 'Vai alle coordinate' }))

    const dialog = screen.getByRole('dialog', { name: 'Coordinate di pagamento' })
    expect(within(dialog).getByText('Indaco Salvatore')).toBeVisible()
    expect(within(dialog).getByText('IT26 U020 0809 5000 0043 1003 095')).toBeVisible()
    expect(within(dialog).getByText('UNCRITMMXXX')).toBeVisible()
    expect(within(dialog).getByText('3. COORDINATE')).toHaveAttribute('aria-current', 'step')
  })

  // A stale wizard state would reopen on coordinates instead of the requested first view.
  it('resets to commission after close and reopen', async () => {
    const user = userEvent.setup()
    renderFlow()

    await user.click(screen.getByRole('button', { name: 'Vai alle coordinate' }))
    await user.click(screen.getByRole('button', { name: 'Chiudi' }))
    await user.click(screen.getByRole('button', { name: 'Vai alla commissione' }))

    expect(screen.getByRole('dialog', { name: 'Commissione da versare' })).toBeVisible()
    expect(screen.queryByText('Coordinate di pagamento')).not.toBeInTheDocument()
  })

  // Back navigation must not close the flow or retain the wrong active step.
  it('returns from coordinates to commission', async () => {
    const user = userEvent.setup()
    renderFlow()

    await user.click(screen.getByRole('button', { name: 'Vai alle coordinate' }))
    await user.click(screen.getByRole('button', { name: 'Indietro' }))

    const dialog = screen.getByRole('dialog', { name: 'Commissione da versare' })
    expect(within(dialog).getByText('2. COMMISSIONE')).toHaveAttribute('aria-current', 'step')
  })

  // Double activation must be idempotent instead of skipping to confirmation.
  it('does not skip a state on rapid repeated activation', async () => {
    const user = userEvent.setup()
    renderFlow()
    const advance = screen.getByRole('button', { name: 'Vai alle coordinate' })

    await user.dblClick(advance)

    expect(screen.getByRole('dialog', { name: 'Coordinate di pagamento' })).toBeVisible()
    expect(screen.queryByText('Pagamento confermato')).not.toBeInTheDocument()
  })

  // A broken focus return strands keyboard users behind the closed overlay.
  it('returns focus to the launcher when Escape closes the dialog', async () => {
    const user = userEvent.setup()
    renderFlow()

    await user.keyboard('{Escape}')

    const launcher = screen.getByRole('button', { name: 'Vai alla commissione' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(launcher).toHaveFocus()
  })

  // Copy controls must never copy a neighbouring payment field.
  it('copies the exact IBAN and announces success', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    const user = userEvent.setup()
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })
    renderFlow()
    await user.click(screen.getByRole('button', { name: 'Vai alle coordinate' }))

    await user.click(screen.getByRole('button', { name: 'Copia IBAN' }))

    expect(writeText).toHaveBeenCalledWith('IT26 U020 0809 5000 0043 1003 095')
    expect(screen.getByRole('status')).toHaveTextContent('IBAN copiato')
  })

  // Browsers can reject clipboard access even when the API exists.
  it('keeps the dialog usable when clipboard permission is denied', async () => {
    const user = userEvent.setup()
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: vi.fn().mockRejectedValue(new Error('denied')) },
    })
    renderFlow()
    await user.click(screen.getByRole('button', { name: 'Vai alle coordinate' }))

    await user.click(screen.getByRole('button', { name: 'Copia SWIFT/BIC' }))

    expect(screen.getByRole('status')).toHaveTextContent('Copia manualmente: UNCRITMMXXX')
    expect(screen.getByRole('dialog', { name: 'Coordinate di pagamento' })).toBeVisible()
  })

  // Confirmation must leave the user with an explicit outcome, not a dead button.
  it('confirms payment and returns to the dashboard', async () => {
    const user = userEvent.setup()
    renderFlow()
    await user.click(screen.getByRole('button', { name: 'Vai alle coordinate' }))

    await user.click(screen.getByRole('button', { name: 'Conferma pagamento' }))

    expect(screen.getByRole('dialog', { name: 'Pagamento confermato' })).toBeVisible()
    await user.click(screen.getByRole('button', { name: 'Torna alla home' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
