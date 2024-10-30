// main.ts

import nuxtUI from '@nuxt/ui/vue-plugin'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)
// ...
app.use(nuxtUI)
app.mount('#app')
