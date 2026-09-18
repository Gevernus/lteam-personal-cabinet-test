# Избегать inline JS и inline CSS
Verdict: PASS
## Evidence
- `index.html:11` — подключён внешний модуль `/src/main.js`; встроенного JavaScript внутри `<script>` нет.
- `src/main.js:3-4` — CSS подключается отдельными файлами через imports.
- `src/components/personal_cabinet_modal_shell.vue:51,60-61` — используются допустимые Vue-привязки `@keydown` и `@click`, а не нативные `on*`-атрибуты.
- `src/components/personal_cabinet_flow.vue:103` и остальные стилевые блоки компонентов — `<style scoped>`; unscoped-блоков не обнаружено.
- Полный поиск по `src/**/*.vue`, `src/**/*.{js,ts}` и `index.html` не обнаружил `style=`, `:style`, `v-bind:style`, `onclick`/других нативных `on*`, `v-html`, `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write`, `cssText`, `eval`, `new Function`, `javascript:` или `srcdoc`.

## Findings
- Нет

## Required fixes
- Не требуются

<!-- isolated reviewer runtime: 72.6s -->
