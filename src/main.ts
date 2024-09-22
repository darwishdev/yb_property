import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import router from './common/routes/routes'
import Aura from '@primevue/themes/aura';
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
}).use(router)
app.mount('#app')

