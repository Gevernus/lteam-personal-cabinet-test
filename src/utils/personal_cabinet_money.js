export const COMMISSION_TOTAL_CENTS = 3700

export const COMMISSION_FEE_ITEMS = Object.freeze([
  Object.freeze({ label: 'IVA 22%', amountCents: 667 }),
  Object.freeze({ label: 'Servizi selezione', amountCents: 1820 }),
  Object.freeze({ label: 'Firma digitale', amountCents: 1213 }),
])

const assertValidCents = (amountCents) => {
  if (!Number.isSafeInteger(amountCents) || amountCents < 0) {
    throw new RangeError('Euro amounts must be non-negative safe integer cents')
  }
}

export const formatEuro = (amountCents) => {
  assertValidCents(amountCents)
  const whole = Math.floor(amountCents / 100)
  const fraction = String(amountCents % 100).padStart(2, '0')
  const groupedWhole = String(whole).replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return `${groupedWhole},${fraction} €`
}

export const parseItalianEuro = (formatted) => {
  if (typeof formatted !== 'string' || !/^\d{1,3}(?:\.\d{3})*,\d{2} €$/.test(formatted)) {
    throw new RangeError('Invalid Italian euro value')
  }

  const normalized = formatted.replaceAll('.', '').replace(',', '.').replace(' €', '')
  return Math.round(Number(normalized) * 100)
}
