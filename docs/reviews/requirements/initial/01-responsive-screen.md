# Один выбранный экран личного кабинета должен иметь desktop и mobile адаптации
Verdict: PASS

## Evidence
- `src/components/personal_cabinet_modal_shell.vue:75-84,168-182` — desktop-модалка до 681 px и отдельная mobile-компоновка при `max-width: 767px`.
- `src/components/personal_cabinet_modal_shell.vue:218-228` — отдельные правила для узких экранов до 359 px: адаптивная ширина, отступы и автоматическая высота.
- `src/components/personal_cabinet_amount_breakdown.vue:84-116` — mobile-адаптация содержимого и визуального оформления.
- `index.html:5` — корректный viewport meta.
- `e2e/personal_cabinet_visual.spec.js:9-25` — screenshot-регрессии для desktop `1440×910` и mobile `390×844`; эталоны находятся в `e2e/personal_cabinet_visual.spec.js-snapshots/`.
- `e2e/personal_cabinet_visual.spec.js:27-43` — при `320×800` проверяются отсутствие горизонтального overflow и нахождение диалога внутри viewport.
- Фактический запуск `npm run test:e2e`: 4/4 теста прошли, включая обе визуальные регрессии и проверку 320 px.

## Findings
- Нет

## Required fixes
- Не требуются

<!-- isolated reviewer runtime: 73.1s -->
