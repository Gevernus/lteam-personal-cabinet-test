# QA report

Дата финального прогона: 18 сентября 2026

## Результаты

| Gate | Результат |
|---|---|
| Static component policy | 22/22 components passed |
| Test-quality/vacuous scan | 5/5 test files passed |
| Vitest | 23/23 passed |
| Playwright | 4/4 passed |
| Accessibility | 3 states, 0 axe violations |
| Production build | passed |
| Runtime dependency audit | 0 vulnerabilities |
| Statement coverage | 98.91% |
| Branch coverage | 89.50% |
| Function coverage | 97.56% |
| Line coverage | 98.73% |
| Mutation score | 100% — 56/56 killed |
| Mutation test strength | 100% |

## Figma similarity

Точное сравнение modal region против 100% Figma canvas render:

| State | Desktop SSIM | Mobile SSIM |
|---|---:|---:|
| Commissione | 0.961 | 0.926 |
| Coordinate | 0.949 | 0.898 |

Outer modal geometry совпадает с Figma по `x/y/width/height` во всех четырёх reference frames. Diff/overlay артефакты находятся в `comparison/`.

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
- Raster-perfect совпадение antialiasing между WebGL canvas Figma и Chrome DOM не гарантируется; геометрия сравнивается при одинаковых frame dimensions, exact font binaries и device scale factor 1.
