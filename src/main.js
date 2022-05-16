import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import request from '@/config'

console.log(import.meta.env)
const app = createApp(App)

app.config.globalProperties.$http = request
app.use(router).mount('#app')
