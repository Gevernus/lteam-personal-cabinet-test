import { cp, mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { build } from 'vite'

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const temporaryRoot = await mkdtemp(join(projectRoot, '.laravel-portability-'))
const targetRoot = join(temporaryRoot, 'resources/js/personal-cabinet')

try {
  await mkdir(targetRoot, { recursive: true })
  await cp(join(projectRoot, 'src/App.vue'), join(targetRoot, 'App.vue'))
  await cp(join(projectRoot, 'src/components'), join(targetRoot, 'components'), { recursive: true })
  await cp(join(projectRoot, 'src/data'), join(targetRoot, 'data'), { recursive: true })
  await cp(join(projectRoot, 'src/utils'), join(targetRoot, 'utils'), { recursive: true })
  await cp(join(projectRoot, 'src/assets'), join(targetRoot, 'assets'), { recursive: true })

  await writeFile(
    join(temporaryRoot, 'resources/js/personal-cabinet.js'),
    `import { createApp } from 'vue'\nimport PersonalCabinetApp from './personal-cabinet/App.vue'\nimport './personal-cabinet/assets/main.css'\n\ncreateApp(PersonalCabinetApp).mount('#personal-cabinet-app')\n`,
  )
  await writeFile(
    join(temporaryRoot, 'index.html'),
    '<div id="personal-cabinet-app"></div><script type="module" src="/resources/js/personal-cabinet.js"></script>\n',
  )

  await build({
    root: temporaryRoot,
    configFile: false,
    logLevel: 'silent',
    plugins: [vue()],
    build: {
      outDir: 'public/build',
      emptyOutDir: true,
    },
  })

  console.log('Laravel-style relocated Vite build passed.')
} finally {
  await rm(temporaryRoot, { recursive: true, force: true })
}
