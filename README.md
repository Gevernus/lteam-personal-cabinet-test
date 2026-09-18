# LTeam — Personal Cabinet Test

Адаптивный Vue 3 сценарий личного кабинета Avanti по Figma: **Commissione da versare → Coordinate di pagamento → подтверждение**.

## Реализовано

- desktop, tablet и mobile от 320px;
- dashboard личного кабинета под modal overlay;
- комиссия `37 €` с точной разбивкой;
- переход к SEPA-реквизитам и возврат назад;
- copy-to-clipboard с fallback при ошибке браузера;
- подтверждение и повторное открытие сценария;
- keyboard/focus management, `aria-live`, reduced motion;
- Vue Composition API (`<script setup>`);
- 21 переиспользуемый domain-component, каждый меньше 300 строк;
- без inline CSS, native inline JS handlers и `v-html`;
- Vercel-конфигурация и инструкция для Laravel Vite.

## Запуск

Требуется Node.js `>=22.12`.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Проверки

```bash
npm test                 # component, contract, property-based, accessibility
npm run test:coverage   # V8 coverage thresholds
npm run test:e2e        # Chrome responsive + visual regression
npm run test:mutation   # Stryker mutation testing
npm run quality         # naming, line limit, inline-code policy
npm run validate        # основной полный прогон без mutation
```

Visual baselines находятся в `e2e/personal_cabinet_visual.spec.js-snapshots/`.

## Структура

```text
src/
├── assets/main.css
├── components/personal_cabinet_*.vue
├── utils/personal_cabinet_money.js
├── App.vue
└── main.js
tests/             Vitest/Testing Library/axe/fast-check
e2e/               Playwright responsive и visual regression
mutation-tests/    независимый mutation harness
scripts/            static quality gates
docs/               спека, review и интеграция
```

## Документация

- [Спецификация и acceptance criteria](docs/specification.md)
- [Выбранный экран](docs/selected-screen.md)
- [Требования из переписки](docs/brief.md)
- [Code review](docs/review.md)
- [Laravel integration](docs/laravel-integration.md)
- [QA report](docs/qa-report.md)
- [Figma / implementation pixel comparison](comparison/README.md)
- [Figma](https://www.figma.com/design/uSUtDWU8Rc4fL1CsOfvtRd/Personal-Cabinet-Copy?node-id=0-1)

## Vercel

`vercel.json` уже настроен под Vite:

```bash
npx vercel
npx vercel --prod
```

Публикация требует авторизации в Vercel. Git remote в локальном репозитории намеренно не создаётся без URL владельца.
