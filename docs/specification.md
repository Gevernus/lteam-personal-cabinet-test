# Спецификация: Commissione da versare

Статус: утверждена для реализации  
Источник: требования из Telegram-чата и Figma `Личный кабинет (Copy)`  
Референс: `references/commission-flow.png`

## 1. Цель

Реализовать один законченный адаптивный сценарий личного кабинета Avanti:

1. Пользователь видит затемнённый dashboard и модальное окно **Commissione da versare**.
2. Пользователь проверяет сумму комиссии и её состав.
3. По CTA **Vai alle coordinate** переходит к реквизитам платежа.
4. Может вернуться назад, закрыть сценарий и повторно открыть его из dashboard.

Backend/API в тестовое задание не входят. Все данные демонстрационные и локальные.

## 2. Поддерживаемые размеры

- Mobile: от `320px` до `767px`.
- Tablet: от `768px` до `1023px`.
- Desktop: от `1024px`.
- Контент не создаёт горизонтальный scroll при ширине `320px`.

## 3. Экран dashboard

На фоне модального окна отображаются:

- header с логотипом Avanti;
- desktop-навигация Home / Documenti / Profilo;
- mobile bottom navigation;
- профиль Marco Rossi;
- progress `Passo 4 di 5`;
- баланс `€ 12 000`;
- checklist этапов;
- кнопка `Vai alla commissione`, открывающая закрытый сценарий.

При открытом modal dashboard имеет визуальное затемнение и недоступен для pointer interaction.

## 4. Состояние «Комиссия»

Диалог имеет доступное имя `Commissione da versare` и содержит:

- кнопки «Назад» и «Закрыть» с доступными именами;
- eyebrow `COMMISSIONE`;
- stepper из трёх шагов: `1. IBAN`, `2. COMMISSIONE`, `3. COORDINATE`;
- активный шаг `2. COMMISSIONE` с `aria-current="step"`;
- итог `37 €`;
- строки `IVA 22% — 6,67 €`, `Servizi selezione — 18,20 €`, `Firma digitale — 12,13 €`;
- информационный notice;
- выбранный способ `Pagamento servizi`;
- CTA `Vai alle coordinate`.

Инвариант: сумма строк равна `37,00 €`.

## 5. Состояние «Реквизиты»

После CTA тот же диалог показывает:

- заголовок `Coordinate di pagamento`;
- активный шаг `3. COORDINATE`;
- инструкцию `Copia i dati, apri la tua banca e invia il bonifico.`;
- получателя `Indaco Salvatore`;
- IBAN `IT26 U020 0809 5000 0043 1003 095`;
- SWIFT/BIC `UNCRITMMXXX`;
- сумму `37 €`;
- подсказку с причиной платежа `Transferir`;
- CTA `Conferma pagamento`.

Кнопки копирования имеют доступные имена. Успешное копирование временно объявляется через `aria-live`. При недоступном Clipboard API интерфейс не падает и сообщает, что значение нужно скопировать вручную.

## 6. Переходы состояния

| Исходное состояние | Действие | Новое состояние |
|---|---|---|
| commission | `Vai alle coordinate` | coordinates |
| coordinates | `Назад` | commission |
| любое открытое | `Закрыть` или `Escape` | closed |
| closed | `Vai alla commissione` | commission |
| coordinates | `Conferma pagamento` | confirmed |
| confirmed | `Torna alla home` | closed |

После закрытия focus возвращается на кнопку открытия. При открытии focus переходит на заголовок диалога. Background не закрывает диалог случайным кликом.

## 7. Accessibility

- Семантический `role="dialog"`, `aria-modal="true"`.
- Все действия доступны с клавиатуры.
- Видимый `:focus-visible`.
- Icon-only buttons имеют `aria-label`.
- Статусы копирования и подтверждения объявляются screen reader.
- Цветовой контраст текста и controls соответствует WCAG AA.
- При `prefers-reduced-motion` переходы отключаются.

## 8. Архитектурные ограничения из чата

- Vue 3 Composition API, только `<script setup>`.
- Один компонент — один `.vue`-файл.
- Каждый компонент меньше 300 строк.
- Файлы компонентов именуются `personal_cabinet_<purpose>.vue`.
- Кнопка реализуется переиспользуемым компонентом.
- Нет `onclick`, `style="…"`, динамических CSS-строк и другого inline JS/CSS.
- Компоненты не зависят от Vercel и могут быть перенесены в Laravel Vite entrypoint.

## 9. Definition of Done

- Все пункты разделов 2–8 реализованы.
- Unit/component/feature/a11y/e2e/visual тесты проходят.
- `npm run build` проходит без warning/error.
- Все `.vue`-файлы короче 300 строк; static quality-check это контролирует.
- Mutation score utility-логики выше 80%.
- Проверены viewport `320×800`, `390×844`, `768×1024`, `1440×1000`.
- README описывает запуск, тесты, Laravel и Vercel.
