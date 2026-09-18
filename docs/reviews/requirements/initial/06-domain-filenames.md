# Имя файла компонента состоит из доменного имени + назначения
Verdict: PASS

## Evidence
- `src/App.vue:2` — composition root импортирует `personal_cabinet_flow.vue`.
- `src/components/personal_cabinet_flow.vue:3-7` — импорты основных доменных компонентов соответствуют схеме `personal_cabinet_<назначение>.vue`.
- `src/components/personal_cabinet_dashboard.vue:3-8` — все шесть дочерних компонентов названы по требуемой схеме.
- `src/components/personal_cabinet_commission_content.vue:2-6` и `src/components/personal_cabinet_coordinates_content.vue:3-6` — остальные доменные импорты также соблюдают схему.
- Проверены 22 доменных `.vue`-файла: все имеют префикс `personal_cabinet_` и суффикс назначения; все 37 импортов `.vue` разрешаются. `App.vue` корректно исключён как composition root.

## Findings
- Нет

## Required fixes
- Не требуются

<!-- isolated reviewer runtime: 42.9s -->
