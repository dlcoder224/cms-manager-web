import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from '@/router'
import api from '@/api'
import storage from '@/utils/storage'
import store from '@/store'

// console.log(import.meta.env)
const app = createApp(App)

app.config.globalProperties.$api = api
app.config.globalProperties.$storage = storage

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(store)
app.mount('#app')
