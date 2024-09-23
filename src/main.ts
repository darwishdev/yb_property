import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import router from './common/routes/routes'
import { config } from './common/primevue/primevue'
import '@/common/styles/styles.scss'
import { createPinia } from 'pinia'
import App from './App.vue'
import AppIcon from './common/components/AppIcon.vue';
import AppImage from './common/components/AppImage.vue';
import 'primeicons/primeicons.css'
import { setupI18n } from './common/i18n/i18n'
const app = createApp(App)
const pinia = createPinia()
const i18n = setupI18n({ locale: 'en' }, router)
app.use(PrimeVue, config).use(router).use(i18n).use(pinia).component('app-icon' , AppIcon).component('app-image' , AppImage)

// navigation guards
app.mount('#app')

