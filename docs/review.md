# Code review

Дата: 18 сентября 2026
Scope: финальный pixel-perfect pass

## Проверено

- требования Telegram-чата;
- соответствие `docs/specification.md`;
- декомпозиция Vue-компонентов;
- state transitions и focus management;
- WCAG semantics и keyboard flow;
- mobile/desktop screenshots;
- границы 320px;
- Laravel/Vercel portability;
- dependency/runtime audit.

## Найдено и исправлено

### P0 — первая версия не соответствовала геометрии Figma

Первое сравнение ошибочно использовало увеличенный crop общего canvas и не гарантировало загрузку `Inter`: в Chrome срабатывал fallback `Avenir`. Публичный scene graph декодирован напрямую; зафиксированы точные frame/node IDs, размеры, offsets, typography, colors и assets. Подключены self-hosted `Inter`/`Geist`, modal перестроен по абсолютной геометрии Figma. Эталоны теперь экспортируются при 100% zoom без апскейла.

### P0 — mobile modal выходил за viewport

Первый headless screenshot показал, что `width: min(100%, 390px)` может вычисляться относительно grid track и выходить за край узкого viewport. Исправлено на явный `calc(100vw - gutters)`. Добавлен Playwright regression для 320px с проверкой document width и bounding rectangle.

### P0 — неверная семантика definition list

Компонентные wrappers внутри `<dl>` создавали структуру, которую axe распознавал как нарушение WCAG 1.3.1. Контейнер заменён на обычный block, а каждая пара `dt/dd` получила собственный `<dl>`. Axe повторно пройден.

### P1 — Clipboard failure boundary

Добавлены отдельные кейсы для rejected Clipboard API и полностью отсутствующего API. В обоих случаях dialog остаётся рабочим и показывает manual-copy fallback.

### P1 — компоненты содержали demo-данные вместо reusable API

Независимый requirement-review выявил, что кнопки и shell были переиспользуемыми, но пользователь, баланс, комиссия, реквизиты, navigation и checklist оставались зашиты в presentation-компонентах. Demo-модель перенесена в `src/data/personal_cabinet_demo.js`; visual-компоненты теперь получают данные через props. Добавлен end-to-end component contract с альтернативным пользователем, суммой и реквизитами.

### P1 — Laravel guide не переносил все assets

Инструкция не включала fonts/avatar, а основной CSS затрагивал глобальные `html/body`. Assets добавлены в карту переноса, styles изолированы `.personal-cabinet-app`, standalone reset вынесен в `demo.css`. Добавлен реальный relocated Vite build в `npm run test:laravel`.

### P1 — quality guard покрывал не все SFC

Guard сканировал только верхний уровень `src/components` и пропускал `App.vue`; line counter учитывал завершающий newline как дополнительную строку. Обход сделан рекурсивным по всему `src`, а подсчёт нормализован.

### P1 — mutation runner давал false survivors

Vitest/Stryker загружал статические ESM exports до активации мутанта, из-за чего вручную воспроизводимые мутации ошибочно считались выжившими. Mutation harness перенесён на официальный Mocha runner; manual mutation предварительно доказала, что property-тест падает. Итоговый score — 100% (56/56 killed).

## Результат review

- Code blocking findings: **0**.
- Каждый domain-component: отдельный `personal_cabinet_*.vue` файл; `App.vue` — composition root.
- Максимальный размер компонента: **265 строк** при лимите 300.
- Inline CSS/JS: **не найдено**.
- Production dependencies audit: **0 high/critical vulnerabilities**.

## Осознанные ограничения

- Это frontend-demo: реальный API подтверждения платежа не был дан в ТЗ.
- Exact Figma frame exports доступны только через canvas render; для воспроизводимости их reviewed 100% captures сохранены в `comparison/`.
- Буквальное требование «отправить Git + Vercel» пока остаётся внешним BLOCKER: Git remote, Vercel credentials и preview URL отсутствуют. Репозиторий и `vercel.json` подготовлены.
