import { createApp } from 'vue'
import nuxtUI from '@nuxt/ui/vue-plugin'
import App from './App.vue'

const app = createApp(App)
// ...
app.use(nuxtUI)
app.mount('#app')
