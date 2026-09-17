import assert from 'node:assert/strict'
import {
  COMMISSION_FEE_ITEMS,
  COMMISSION_TOTAL_CENTS,
  formatEuro,
  parseItalianEuro,
} from '../src/utils/personal_cabinet_money.js'

const assertInvalidCents = (value) => {
  assert.throws(
    () => formatEuro(value),
    {
      name: 'RangeError',
      message: 'Euro amounts must be non-negative safe integer cents',
    },
  )
}

const assertInvalidEuro = (value) => {
  assert.throws(
    () => parseItalianEuro(value),
    { name: 'RangeError', message: 'Invalid Italian euro value' },
  )
}

describe('money mutation contract', () => {
  it('keeps every fee and the declared total exact', () => {
    assert.deepEqual(COMMISSION_FEE_ITEMS, [
      { label: 'IVA 22%', amountCents: 667 },
      { label: 'Servizi selezione', amountCents: 1820 },
      { label: 'Firma digitale', amountCents: 1213 },
    ])
    assert.equal(COMMISSION_TOTAL_CENTS, 3700)
    assert.equal(
      COMMISSION_FEE_ITEMS.reduce((sum, item) => sum + item.amountCents, 0),
      COMMISSION_TOTAL_CENTS,
    )
  })

  it('formats cent, euro, and grouping boundaries exactly', () => {
    assert.equal(formatEuro(0), '0,00 €')
    assert.equal(formatEuro(1), '0,01 €')
    assert.equal(formatEuro(99), '0,99 €')
    assert.equal(formatEuro(100), '1,00 €')
    assert.equal(formatEuro(101), '1,01 €')
    assert.equal(formatEuro(99_999), '999,99 €')
    assert.equal(formatEuro(100_000), '1.000,00 €')
    assert.equal(formatEuro(100_000_000), '1.000.000,00 €')
  })

  it('rejects every unsupported cent representation with the public error', () => {
    assertInvalidCents(-1)
    assertInvalidCents(1.2)
    assertInvalidCents(Number.NaN)
    assertInvalidCents(Number.POSITIVE_INFINITY)
    assertInvalidCents(Number.MAX_SAFE_INTEGER + 1)
  })

  it('parses valid grouped values without losing cents', () => {
    assert.equal(parseItalianEuro('0,00 €'), 0)
    assert.equal(parseItalianEuro('0,01 €'), 1)
    assert.equal(parseItalianEuro('37,00 €'), 3700)
    assert.equal(parseItalianEuro('1.000,01 €'), 100001)
    assert.equal(parseItalianEuro('1.000.000,00 €'), 100000000)
  })

  it('rejects malformed Italian money instead of partially parsing it', () => {
    assertInvalidEuro(null)
    assertInvalidEuro({ toString: () => '1,00 €' })
    assertInvalidEuro('')
    assertInvalidEuro('1,00')
    assertInvalidEuro('1.00 €')
    assertInvalidEuro('1,0 €')
    assertInvalidEuro('1,000 €')
    assertInvalidEuro('1.00,00 €')
    assertInvalidEuro('x1,00 €')
    assertInvalidEuro('1,00 €x')
    assertInvalidEuro('1000,00 €')
  })
})
