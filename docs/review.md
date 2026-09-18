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

### P1 — mutation runner давал false survivors

Vitest/Stryker загружал статические ESM exports до активации мутанта, из-за чего вручную воспроизводимые мутации ошибочно считались выжившими. Mutation harness перенесён на официальный Mocha runner; manual mutation предварительно доказала, что property-тест падает. Итоговый score — 100% (56/56 killed).

## Результат review

- Blocking findings: **0**.
- Каждый Vue component: отдельный `personal_cabinet_*.vue` файл.
- Максимальный размер компонента: **233 строки** при лимите 300.
- Inline CSS/JS: **не найдено**.
- Production dependencies audit: **0 high/critical vulnerabilities**.

## Осознанные ограничения

- Это frontend-demo: реальный API подтверждения платежа не был дан в ТЗ.
- Exact Figma frame exports доступны только через canvas render; для воспроизводимости их reviewed 100% captures сохранены в `comparison/`.
- Git remote и Vercel credentials отсутствуют локально; репозиторий и `vercel.json` полностью подготовлены, но публикация требует аккаунта владельца.
