# LTeam — Personal Cabinet Test

Адаптивный Vue 3 сценарий личного кабинета Avanti по Figma: **Commissione da versare → Coordinate di pagamento → подтверждение**.

- **Live demo:** https://lteam-personal-cabinet-test.vercel.app
- **GitHub:** https://github.com/Gevernus/lteam-personal-cabinet-test

## Реализовано

- desktop, tablet и mobile от 320px;
- dashboard личного кабинета под modal overlay;
- комиссия `37 €` с точной разбивкой;
- переход к SEPA-реквизитам и возврат назад;
- copy-to-clipboard с fallback при ошибке браузера;
- подтверждение и повторное открытие сценария;
- keyboard/focus management, `aria-live`, reduced motion;
- Vue Composition API (`<script setup>`);
- 23 переиспользуемых domain-component, каждый меньше 300 строк;
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
npm run test:laravel    # relocated Laravel-style Vite build
npm run quality         # naming, line limit, inline-code policy
npm run validate        # основной полный прогон без mutation
```

Visual baselines находятся в `e2e/personal_cabinet_visual.spec.js-snapshots/`.

## Структура

```text
src/
├── assets/            scoped CSS, exact fonts, avatar
├── components/personal_cabinet_*.vue
├── data/personal_cabinet_demo.js
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
- [Точные параметры Figma](docs/figma-implementation-spec.md)
- [Выбранный экран](docs/selected-screen.md)
- [Требования из переписки](docs/brief.md)
- [Code review](docs/review.md)
- [Independent requirement reviews](docs/reviews/requirements/README.md)
- [Laravel integration](docs/laravel-integration.md)
- [QA report](docs/qa-report.md)
- [Figma / implementation pixel comparison](comparison/README.md)
- [Figma](https://www.figma.com/design/uSUtDWU8Rc4fL1CsOfvtRd/Personal-Cabinet-Copy?node-id=0-1)

## Vercel

Production: https://lteam-personal-cabinet-test.vercel.app

`vercel.json` настроен под Vite. Локальная директория связана с Vercel-проектом `gev2/lteam-personal-cabinet-test`; повторный production deploy:

```bash
npx vercel --prod
```

Автоматические deploy на push требуют разрешения репозитория для Vercel GitHub App. До его подключения deployment выполняется через CLI.
