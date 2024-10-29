import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import ui from '@nuxt/ui/vite'


export default defineConfig({
  plugins: [
    vue(),
    ui(),
	vueDevTools(),
  ],
})
