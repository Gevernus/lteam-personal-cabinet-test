import { render, screen, within } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import PersonalCabinetDashboard from '../src/components/personal_cabinet_dashboard.vue'
import PersonalCabinetFlow from '../src/components/personal_cabinet_flow.vue'
import PersonalCabinetProgressCard from '../src/components/personal_cabinet_progress_card.vue'
import { PERSONAL_CABINET_DEMO } from '../src/data/personal_cabinet_demo.js'

const makeAlternateModel = () => {
  const model = structuredClone(PERSONAL_CABINET_DEMO)
  model.modal.titles.commission = 'Costi del servizio'
  model.dashboard.user.name = 'Giulia Bianchi'
  model.dashboard.balance.amount = '€ 8 500'
  model.commission.amount.label = 'TOTALE SERVIZI'
  model.commission.amount.total = '42 €'
  model.commission.amount.items = [{ label: 'Consulenza', value: '42,00 €' }]
  model.commission.paymentOption.title = 'Bonifico prioritario'
  model.commission.cta = 'Mostra coordinate alternative'
  model.coordinates.details = [
    { label: 'IBAN TEST', value: 'IT00 TEST 0000', copyLabel: 'Copia IBAN test' },
  ]
  model.coordinates.cta = 'Conferma bonifico alternativo'
  model.confirmation.title = 'Bonifico alternativo registrato'
  return model
}

describe('personal cabinet component input contract', () => {
  // A reusable flow must render caller data rather than silently falling back to the demo customer.
  it('propagates an alternate model through dashboard and commission components', () => {
    const model = makeAlternateModel()
    render(PersonalCabinetFlow, { props: { model } })

    const dialog = screen.getByRole('dialog', { name: 'Costi del servizio' })
    expect(screen.getByText('Giulia Bianchi')).toBeVisible()
    expect(screen.getByText('€ 8 500')).toBeVisible()
    expect(within(dialog).getByText('TOTALE SERVIZI')).toBeVisible()
    expect(within(dialog).getByText('42 €')).toBeVisible()
    expect(within(dialog).getByText('Consulenza')).toBeVisible()
    expect(within(dialog).getByText('Bonifico prioritario')).toBeVisible()
  })

  // Wiring can regress independently of rendering the first state, so verify model data after transition too.
  it('keeps caller-provided coordinates and confirmation copy across state changes', async () => {
    const user = userEvent.setup()
    const model = makeAlternateModel()
    render(PersonalCabinetFlow, { props: { model } })

    await user.click(screen.getByRole('button', { name: 'Mostra coordinate alternative' }))
    expect(screen.getByText('IBAN TEST')).toBeVisible()
    expect(screen.getByText('IT00 TEST 0000')).toBeVisible()

    await user.click(screen.getByRole('button', { name: 'Conferma bonifico alternativo' }))
    expect(screen.getByRole('heading', { name: 'Bonifico alternativo registrato' })).toBeVisible()
  })

  // Repeated widgets must not create duplicate IDs or links that target another instance.
  it('keeps dashboard IDs local when two instances are mounted together', () => {
    const model = makeAlternateModel().dashboard
    const { container } = render({
      components: { PersonalCabinetDashboard },
      data: () => ({ model }),
      template: '<div><PersonalCabinetDashboard :model="model" /><PersonalCabinetDashboard :model="model" /></div>',
    })

    const mainIds = [...container.querySelectorAll('main')].map((element) => element.id)
    const logoTargets = [...container.querySelectorAll('.personal-cabinet-logo')].map((element) =>
      element.getAttribute('href'),
    )
    expect(new Set(mainIds).size).toBe(2)
    expect(logoTargets).toEqual(mainIds.map((id) => `#${id}`))
  })

  // Controlled consumers must be able to choose the visible state without relying on internal defaults.
  it('honours controlled open/state props and variable-length progress collections', async () => {
    const model = makeAlternateModel()
    const { rerender } = render(PersonalCabinetFlow, {
      props: { model, open: false, state: 'coordinates' },
    })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await rerender({ model, open: true, state: 'coordinates' })
    expect(screen.getByRole('dialog', { name: 'Coordinate di pagamento' })).toBeVisible()

    const progress = structuredClone(model.dashboard.progress)
    progress.fixedLayout = false
    progress.steps = progress.steps.slice(0, 3)
    const { container: progressContainer } = render(PersonalCabinetProgressCard, {
      props: { model: progress },
    })
    expect(within(progressContainer).getAllByRole('listitem')).toHaveLength(3)
  })
})
