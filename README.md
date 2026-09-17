# LTeam — Personal Cabinet Test

Рабочий репозиторий тестового задания от `@lteam063`: один адаптивный экран личного кабинета по Figma.

## Статус

Создан Vue 3 + Vite каркас. Конкретный экран ещё не выбран: публичная ссылка показывает большое полотно с множеством desktop/mobile сценариев, а в переписке разрешено взять любой.

## Запуск

```bash
npm install
npm run dev
npm run build
```

## Материалы

- [Краткое ТЗ](docs/brief.md)
- [Оценка сложности](docs/assessment.md)
- [Вопросы и критерии готовности](docs/questions.md)
- [Общий thumbnail макета](references/figma-overview.webp)
- [Figma](https://www.figma.com/design/uSUtDWU8Rc4fL1CsOfvtRd/Personal-Cabinet-Copy?node-id=0-1)

## Технический подход

- Vue 3, Composition API, `<script setup>`.
- Один компонент — один `.vue`-файл, до 300 строк.
- Имена доменных компонентов: `personal_cabinet_<purpose>.vue`.
- Переиспользуемые базовые элементы выносятся отдельно.
- Без HTML inline handlers, атрибута `style` и динамической генерации CSS строками.
- Адаптивная вёрстка mobile/desktop.
- Статическая Vercel-сборка; структура пригодна для переноса в Laravel Vite pipeline.
