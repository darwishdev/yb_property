import { createApp } from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
import PrimeVue from 'primevue/config';
import router from './common/routes/routes'
import { config } from './common/primevue/primevue'
import '@/common/styles/styles.scss'
import { createPinia } from 'pinia'
import App from './App.vue'
import AppIcon from './common/components/AppIcon.vue';
import AppImage from './common/components/AppImage.vue';
import 'primeicons/primeicons.css'
import i18n from './common/i18n/i18n'
import DialogService from 'primevue/dialogservice';
const app = createApp(App)
const pinia = createPinia()
app.use(PrimeVue, config).use(DialogService).use(router).use(VueAwesomeSwiper).use(i18n).use(pinia).component('app-icon', AppIcon).component('app-image', AppImage)

// navigation guards
app.mount('#app')

