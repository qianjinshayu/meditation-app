import { createSSRApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import '@/styles/common.scss'
import { requestInterceptor } from './interceptors'

export function createApp() {
  const app = createSSRApp(App)

  // 注册请求拦截
  app.use(requestInterceptor)

  return {
    app
  }
}
