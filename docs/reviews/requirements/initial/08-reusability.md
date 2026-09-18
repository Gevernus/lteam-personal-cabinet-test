# Компоненты должны быть переиспользуемыми
Verdict: FAIL

## Evidence
- `src/components/personal_cabinet_button.vue:5-26,45-55` — переиспользуемый примитив: варианты, иконка, тип, событие и содержимое через slot.
- `src/components/personal_cabinet_detail_row.vue:4-20,23-36`, `personal_cabinet_notice.vue:4-16`, `personal_cabinet_modal_shell.vue:5-21,47-58` — корректные props/emits/slots.
- `src/components/personal_cabinet_amount_breakdown.vue:2-6,9-20` — данные комиссии импортированы напрямую, заголовок и отображаемые `37 €` зашиты.
- `src/components/personal_cabinet_balance_card.vue:4-10,13-25` — наружу выведено только событие; сумма, ставка, подписи и CTA фиксированы.
- `src/components/personal_cabinet_checklist.vue:4-10,14-49` и `personal_cabinet_progress_card.vue:4-17` — шаги, статусы и счётчики зашиты; props отсутствуют.
- `src/components/personal_cabinet_user_summary.vue:1-17,29-37` — имя, email, организация и даже конкретный avatar asset фиксированы.
- `src/components/personal_cabinet_coordinates_content.vue:9-14,36-67` — реквизиты конкретного получателя и весь сопровождающий текст встроены в компонент.
- `src/components/personal_cabinet_confirmation_content.vue:12-21` — фиксированное обращение к Marco и тексты результата.
- `src/components/personal_cabinet_payment_option.vue:4-9,13-22` — prop управляет лишь `selected`, тогда как тип, заголовок и описание оплаты неизменяемы.
- `src/components/personal_cabinet_stepper.vue:2-10` — параметризован только текущий шаг; список и доступная длина жёстко ограничены тремя шагами.
- `src/components/personal_cabinet_header.vue:5-9,15-34`, `personal_cabinet_withdrawal_banner.vue:5-15` — навигация, поддержка, уведомления и незавершённые шаги полностью зашиты.
- `src/components/personal_cabinet_dashboard.vue:20-39` — персональные данные повторно встроены в контейнер вместо передачи модели дочерним компонентам.

## Findings
- HIGH — большинство предметных визуальных компонентов являются одноразовыми шаблонами конкретного пользователя/платежа и не позволяют повторное использование с другими данными.
- MEDIUM — `PersonalCabinetStepper`, `PersonalCabinetPaymentOption` и `PersonalCabinetPaymentMethod` формально имеют props, но их публичный API покрывает лишь малую часть отображаемого содержимого.
- LOW — genuinely reusable: `PersonalCabinetButton`, `PersonalCabinetIconButton`, `PersonalCabinetIcon`, `PersonalCabinetDetailRow`, `PersonalCabinetNotice`, `PersonalCabinetModalShell`; брендовый `PersonalCabinetLogo` допустимо фиксирован. Требование не обязывает превращать композиционные `App`/`Flow` в универсальный workflow, однако это не оправдывает жёсткие данные в дочерних представлениях.

## Required fixes
- Передавать модель пользователя, баланс, реквизиты, комиссию, шаги и тексты через типизированные props из композиционного корня или store/API.
- Сделать checklist/progress/stepper компонентами с props `items/steps`, `current/completed` и вычисляемыми счётчиками.
- Добавить payment option props/slots для icon, title, description и доступного состояния выбора.
- Параметризовать confirmation, withdrawal banner и header; действия отдавать через emits, изменяемые области — через slots.
- Убрать дублирование персональных данных из `PersonalCabinetDashboard` и использовать отдельный параметризованный компонент данных.

<!-- isolated reviewer runtime: 48.9s -->
