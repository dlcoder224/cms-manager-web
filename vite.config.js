import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    post: 'loaclhost',
    // port: 8080
  },
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'views': path.resolve(__dirname,'@/views')
    }
  }
})
