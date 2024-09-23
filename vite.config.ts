import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// https://vitejs.dev/config/
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
export default defineConfig({
  plugins: [vue(), vueDevTools(),

  VueI18nPlugin({
    /* options */
    // locale messages resource pre-compile option
    include: resolve(dirname(fileURLToPath(import.meta.url)), './src/common/i18n/locales/**'),
  }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }

})
