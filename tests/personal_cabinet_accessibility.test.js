import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { describe, expect, it } from 'vitest'
import App from '../src/App.vue'

describe('commission flow accessibility', () => {
  // A visually accurate dialog can still be unusable to assistive technology.
  it('has no automated accessibility violations on commission', async () => {
    const { container } = render(App)

    const results = await axe(container)

    expect(results.violations).toEqual([])
  })

  // The second wizard state introduces copy controls and must remain accessible.
  it('has no automated accessibility violations on coordinates', async () => {
    const user = userEvent.setup()
    const { container } = render(App)
    await user.click(screen.getByRole('button', { name: 'Vai alle coordinate' }))

    const results = await axe(container)

    expect(results.violations).toEqual([])
  })

  // Icon-only controls without names disappear from a screen reader's action list.
  it('exposes names for every commission action', () => {
    render(App)

    expect(screen.getByRole('button', { name: 'Indietro' })).toHaveAccessibleName('Indietro')
    expect(screen.getByRole('button', { name: 'Chiudi' })).toHaveAccessibleName('Chiudi')
    expect(screen.getByRole('button', { name: 'Vai alle coordinate' })).toHaveAccessibleName(
      'Vai alle coordinate',
    )
  })
})
