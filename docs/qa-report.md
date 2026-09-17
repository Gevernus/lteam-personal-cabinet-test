# QA report

Дата финального прогона: 17 сентября 2026

## Результаты

| Gate | Результат |
|---|---|
| Static component policy | 21/21 components passed |
| Test-quality/vacuous scan | 5/5 test files passed |
| Vitest | 23/23 passed |
| Playwright | 4/4 passed |
| Accessibility | 3 states, 0 axe violations |
| Production build | passed |
| Runtime dependency audit | 0 vulnerabilities |
| Statement coverage | 98.85% |
| Branch coverage | 97.41% |
| Function coverage | 97.61% |
| Line coverage | 98.67% |
| Mutation score | 100% — 56/56 killed |
| Mutation test strength | 100% |

## Spec coverage

Покрыты все 9 разделов исполнимого контракта:

- desktop/mobile/320px geometry;
- dashboard и повторное открытие;
- точная комиссия и conservation invariant;
- реквизиты и Clipboard API failure modes;
- все state transitions;
- focus и keyboard flow;
- axe accessibility;
- naming/line/inline-code policy;
- production build и deployment configuration.

Spec coverage: **9/9**.

## Regression proof

- TDD RED был получен до реализации: отсутствовал money utility, 11 UI-контрактов падали на placeholder.
- Mobile overflow найден первым визуальным прогоном; после исправления защищён Playwright-кейсом на 320px.
- Невалидный `<dl>` обнаружен axe; после исправления защищён accessibility-кейсом coordinates state.
- Arithmetic mutation (`/ 100` → `* 100`) вручную применялась до настройки mutation runner и ломала property-based round-trip test.

## Команды воспроизведения

```bash
npm run validate
rm -rf .stryker-tmp reports/mutation && npm run test:mutation
npm audit --omit=dev --audit-level=high
```

## Не покрывается намеренно

- Реальный backend/API: контракт не предоставлен.
- Реальный банковский перевод: UI использует локальный demo state.
- Pixel-level сравнение с закрытыми Figma export assets: публичный view не выдаёт исходные файлы; вместо этого зафиксированы reviewed Playwright baselines desktop/mobile.
