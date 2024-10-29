import nuxtUI from '@nuxt/ui/vue-plugin'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
// ...
app.use(nuxtUI)
app.mount('#app')
