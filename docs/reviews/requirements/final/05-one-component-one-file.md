# Отдельный компонент = один файл
Verdict: PASS

## Evidence
- Инвентарь: 24 Vue SFC — `src/App.vue:6` и 23 файла в `src/components/`: `personal_cabinet_amount_breakdown.vue:20`, `balance_card.vue:21`, `button.vue:40`, `checklist.vue:12`, `commission_content.vue:23`, `confirmation_content.vue:16`, `coordinates_content.vue:48`, `dashboard.vue:27`, `detail_row.vue:23`, `flow.vue:61`, `header.vue:13`, `icon.vue:23`, `icon_button.vue:28`, `logo.vue:1`, `modal_shell.vue:50`, `notice.vue:12`, `payment_method.vue:16`, `payment_option.vue:28`, `personal_data.vue:10`, `progress_card.vue:12`, `stepper.vue:15`, `user_summary.vue:10`, `withdrawal_banner.vue:12`. В каждом ровно один корневой блок `<template>`.
- Все скриптовые SFC используют единственный `<script setup>`; например, `src/App.vue:1-4`, `src/components/personal_cabinet_flow.vue:1-59`, `src/components/personal_cabinet_dashboard.vue:1-25`. `personal_cabinet_logo.vue` — корректный template-only компонент (`src/components/personal_cabinet_logo.vue:1-11`).
- Локальных `defineComponent`, `components:`, render-функций и JSX/TSX-подкомпонентов в `src` нет. Точка композиции только монтирует `App` (`src/main.js:1-6`).
- Вложенные `<template v-if>` в `src/components/personal_cabinet_icon.vue:33-109` являются условными ветвями внутри одного SVG и одного корневого шаблона (`src/components/personal_cabinet_icon.vue:23-111`), а не отдельными компонентами.

## Findings
- Нет

## Required fixes
- Не требуются

<!-- isolated reviewer runtime: 67.0s -->
