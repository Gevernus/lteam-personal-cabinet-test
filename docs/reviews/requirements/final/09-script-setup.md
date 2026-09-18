# Код должен использовать сокращённую Composition API (`<script setup>`)
Verdict: PASS
## Evidence
- `src/App.vue:1` — `<script setup>`.
- `src/components/personal_cabinet_{amount_breakdown,balance_card,button,checklist,commission_content,confirmation_content,coordinates_content,dashboard,detail_row,flow,header,icon,icon_button,modal_shell,notice,payment_method,payment_option,personal_data,progress_card,stepper,user_summary,withdrawal_banner}.vue:1` — `<script setup>` во всех 22 компонентах со скриптом.
- `src/components/personal_cabinet_logo.vue` — script-блок отсутствует, поэтому требование к нему неприменимо.
- Во всех 23 SFC со скриптом ровно один script-блок; `export default`, `defineComponent()`, классический `setup()` и маркеры Options API не обнаружены.

## Findings
- Нет

## Required fixes
- Не требуются

<!-- isolated reviewer runtime: 36.8s -->
