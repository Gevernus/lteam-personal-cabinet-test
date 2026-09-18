# Каждый component file must not exceed 300 lines
Verdict: PASS

## Evidence
- Физические строки всех 24 компонентов:
  - `src/components/personal_cabinet_modal_shell.vue:1-241` — 241 (максимум).
  - `src/components/personal_cabinet_coordinates_content.vue:1-233` — 233.
  - `src/components/personal_cabinet_checklist.vue:1-207` — 207.
  - `src/components/personal_cabinet_header.vue:1-198` — 198.
  - `src/components/personal_cabinet_dashboard.vue:1-181` — 181.
  - `src/components/personal_cabinet_icon.vue:1-165` — 165.
  - `src/components/personal_cabinet_progress_card.vue:1-135` — 135.
  - `src/components/personal_cabinet_button.vue:1-131` — 131.
  - `src/components/personal_cabinet_amount_breakdown.vue:1-129` — 129.
  - `src/components/personal_cabinet_detail_row.vue:1-128` — 128.
  - `src/components/personal_cabinet_balance_card.vue:1-123` — 123.
  - `src/components/personal_cabinet_payment_option.vue:1-115` — 115.
  - `src/components/personal_cabinet_flow.vue:1-107` — 107.
  - `src/components/personal_cabinet_user_summary.vue:1-105` — 105.
  - `src/components/personal_cabinet_withdrawal_banner.vue:1-81` — 81.
  - `src/components/personal_cabinet_icon_button.vue:1-76` — 76.
  - `src/components/personal_cabinet_stepper.vue:1-71` — 71.
  - `src/components/personal_cabinet_personal_data.vue:1-69` — 69.
  - `src/components/personal_cabinet_logo.vue:1-64` — 64.
  - `src/components/personal_cabinet_notice.vue:1-62` — 62.
  - `src/components/personal_cabinet_confirmation_content.vue:1-61` — 61.
  - `src/components/personal_cabinet_commission_content.vue:1-61` — 61.
  - `src/components/personal_cabinet_payment_method.vue:1-53` — 53.
  - `src/App.vue:1-10` — 10.
- `scripts/check_quality.mjs:5-20` рекурсивно собирает все `.vue` внутри `src`; это совпадает со всеми 24 `.vue` в репозитории.
- `scripts/check_quality.mjs:22-24` считает физические строки, `scripts/check_quality.mjs:38-40` отклоняет файлы длиннее 300 строк.
- `package.json:17-18` включает guard в `quality` и `validate`; `npm run quality` успешно проверил 24 компонента.

## Findings
- Нет

## Required fixes
- Не требуются

<!-- isolated reviewer runtime: 50.1s -->
