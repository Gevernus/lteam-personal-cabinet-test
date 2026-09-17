import fc from 'fast-check'
import { describe, expect, it } from 'vitest'
import {
  COMMISSION_FEE_ITEMS,
  COMMISSION_TOTAL_CENTS,
  formatEuro,
  parseItalianEuro,
} from '../src/utils/personal_cabinet_money.js'

describe('money contract', () => {
  // Floating-point fee drift would make the line items disagree with the advertised total.
  it('conserves the declared commission total', () => {
    const itemTotal = COMMISSION_FEE_ITEMS.reduce((sum, item) => sum + item.amountCents, 0)

    expect(itemTotal).toBe(COMMISSION_TOTAL_CENTS)
  })

  // Locale formatting must not lose cents or change value over the supported range.
  it('round-trips every supported non-negative cent amount', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 1_000_000_000 }), (amountCents) => {
        const formatted = formatEuro(amountCents)

        expect(parseItalianEuro(formatted)).toBe(amountCents)
      }),
    )
  })

  // The UI contract requires Italian decimal separators and a euro suffix.
  it('always emits a format-compliant Italian euro value', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 1_000_000_000 }), (amountCents) => {
        const formatted = formatEuro(amountCents)

        expect(formatted).toMatch(/^\d{1,3}(?:\.\d{3})*,\d{2} €$/)
      }),
    )
  })

  // Parser inputs that only coerce to valid text must not cross the string trust boundary.
  it('rejects malformed and non-string Italian euro values', () => {
    expect(() => parseItalianEuro('1000,00 €')).toThrow('Invalid Italian euro value')
    expect(() => parseItalianEuro('1,00 € trailing')).toThrow('Invalid Italian euro value')
    expect(() => parseItalianEuro({ toString: () => '1,00 €' })).toThrow(
      'Invalid Italian euro value',
    )
  })

  // Negative or non-integer cents are programmer errors and must not leak into finance UI.
  it.each([-1, 1.2, Number.NaN, Number.POSITIVE_INFINITY])(
    'rejects invalid cent amount %s',
    (amountCents) => {
      expect(() => formatEuro(amountCents)).toThrow(RangeError)
    },
  )
})
