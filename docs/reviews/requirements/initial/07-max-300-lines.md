# Каждый component file must not exceed 300 lines
Verdict: PARTIAL

## Evidence
- Проверены все 23 отслеживаемых `.vue`-файла. Физические строки: `src/App.vue` — 7; `src/components/personal_cabinet_payment_method.vue` — 49; `personal_cabinet_commission_content.vue` — 50; `personal_cabinet_confirmation_content.vue` — 56; `personal_cabinet_notice.vue` — 62; `personal_cabinet_logo.vue` — 64; `personal_cabinet_stepper.vue` — 68; `personal_cabinet_withdrawal_banner.vue` — 73; `personal_cabinet_icon_button.vue` — 76; `personal_cabinet_flow.vue` — 90; `personal_cabinet_payment_option.vue` — 99; `personal_cabinet_user_summary.vue` — 99.
- Остальные: `personal_cabinet_balance_card.vue` — 116; `personal_cabinet_amount_breakdown.vue` — 118; `personal_cabinet_detail_row.vue` — 128; `personal_cabinet_button.vue` — 131; `personal_cabinet_progress_card.vue` — 136; `personal_cabinet_icon.vue` — 165; `personal_cabinet_header.vue` — 192; `personal_cabinet_checklist.vue` — 204; `personal_cabinet_dashboard.vue` — 208; `personal_cabinet_modal_shell.vue` — 230; максимум — `src/components/personal_cabinet_coordinates_content.vue:233`, нарушений лимита нет.
- `scripts/check_quality.mjs:4-5` сканирует только непосредственные `.vue` в `src/components/`; `src/App.vue` и возможные вложенные каталоги не охвачены. Запуск подтвердил проверку лишь 22 из 23 компонентов.
- `scripts/check_quality.mjs:13-19` реализует лимит, но `source.split('\n').length` считает завершающий перевод строки как дополнительную пустую строку.
- `package.json:14-15` включает guard в команды `quality` и `validate`.

## Findings
- HIGH: автоматический guard не покрывает все component files: пропущен `src/App.vue`, а обход `src/components/` нерекурсивный.
- MEDIUM: подсчёт в guard завышает физическое число строк на 1 для файлов с завершающим `\n`, поэтому корректный файл ровно в 300 строк будет отклонён.

## Required fixes
- Рекурсивно собирать все проектные `.vue`-компоненты, включая `src/App.vue`.
- Считать физические строки без фиктивного пустого элемента после завершающего `\n`, например нормализовав конец файла перед `split`.

<!-- isolated reviewer runtime: 46.4s -->
