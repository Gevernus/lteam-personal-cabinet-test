# Использование сокращённой Composition API (`<script setup>`)
Verdict: PASS

## Evidence
- `src/App.vue:1` — `<script setup>`.
- `src/components/personal_cabinet_{amount_breakdown,balance_card,button,checklist,commission_content,confirmation_content,coordinates_content,dashboard,detail_row,flow,header,icon,icon_button,modal_shell,notice,payment_method,payment_option,progress_card,stepper,withdrawal_banner}.vue:1` — `<script setup>`.
- Проверены все 23 Vue SFC: 21 содержат только `<script setup>`; `src/components/personal_cabinet_logo.vue` и `src/components/personal_cabinet_user_summary.vue` не содержат скриптов.
- Во Vue SFC отсутствуют `export default` и классический `setup()`.

## Findings
- Нет

## Required fixes
- Не требуются

<!-- isolated reviewer runtime: 35.9s -->
