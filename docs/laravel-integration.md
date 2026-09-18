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
src/App.vue      → resources/js/personal-cabinet/App.vue
src/components/  → resources/js/personal-cabinet/components/
src/data/        → resources/js/personal-cabinet/data/
src/utils/       → resources/js/personal-cabinet/utils/
src/assets/main.css → resources/js/personal-cabinet/assets/main.css
src/assets/fonts/   → resources/js/personal-cabinet/assets/fonts/
src/assets/marco_rossi_avatar.jpg → resources/js/personal-cabinet/assets/marco_rossi_avatar.jpg
```

Создать `resources/js/personal-cabinet.js`:

```js
import { createApp } from 'vue'
import PersonalCabinetApp from './personal-cabinet/App.vue'
import './personal-cabinet/assets/main.css'

const root = document.querySelector('#personal-cabinet-app')

if (root) {
  createApp(PersonalCabinetApp).mount(root)
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

## 5. CSS isolation

`main.css` ограничен корневым классом `.personal-cabinet-app` и не меняет `html`, `body` или элементы существующего Blade-приложения. Файл `src/assets/demo.css` нужен только standalone-preview и в Laravel не переносится.

## 6. Замена demo-данных

Demo-модель собрана в `data/personal_cabinet_demo.js`; visual-компоненты получают пользователя, баланс, шаги, комиссию и реквизиты через props. Для production замените импорт модели в `App.vue` на данные Blade/API либо передайте объект в `PersonalCabinetFlow` из собственного composition root.

State transition остаётся внутри `personal_cabinet_flow.vue`; сетевое подтверждение платежа подключается через service/adaptor, не внутри visual-компонентов.
