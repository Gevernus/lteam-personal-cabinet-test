# Интеграция с Laravel

Компоненты не используют Vite-specific runtime API, router или Vercel API. Их можно перенести в стандартный Laravel Vite pipeline.

## 1. Зависимости

```bash
npm install vue
npm install --save-dev vite @vitejs/plugin-vue laravel-vite-plugin
```

## 2. Файлы

Скопировать:

```text
src/components/  → resources/js/personal-cabinet/components/
src/utils/       → resources/js/personal-cabinet/utils/
src/assets/main.css → resources/css/personal-cabinet.css
```

Создать `resources/js/personal-cabinet.js`:

```js
import { createApp } from 'vue'
import PersonalCabinetFlow from './personal-cabinet/components/personal_cabinet_flow.vue'
import '../css/personal-cabinet.css'

const root = document.querySelector('#personal-cabinet-app')

if (root) {
  createApp(PersonalCabinetFlow).mount(root)
}
```

## 3. Vite

Добавить entrypoint в `vite.config.js`:

```js
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/personal-cabinet.js'],
      refresh: true,
    }),
    vue(),
  ],
})
```

## 4. Blade

```blade
<div id="personal-cabinet-app"></div>
@vite('resources/js/personal-cabinet.js')
```

## 5. Замена demo-данных

Сейчас данные находятся внутри презентационных компонентов. Для production-интеграции их следует передать props из Blade либо загрузить через application API. State transition остаётся внутри `personal_cabinet_flow.vue`; сетевое подтверждение платежа подключается в `handleConfirm` через отдельный service/adaptor, не внутри visual-компонентов.
