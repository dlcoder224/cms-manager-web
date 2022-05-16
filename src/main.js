import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import request from '@/config'
import storage from '@/utils/storge'

console.log(import.meta.env)
const app = createApp(App)

app.config.globalProperties.$http = request
app.config.globalProperties.$storage = storage
app.use(router).mount('#app')
