import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.scss' // global css

const app = createApp(App)
app.use(router)

//import element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import settings from '@/settings'
import zh from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en' // element-ui lang
let lang = { zh, en }
app.use(ElementPlus, {
  size: localStorage.getItem('size') || settings.defaultSize,
  locale: lang[localStorage.getItem('language') || settings.defaultLanguage]
})

//i18n
import i18n from '@/lang'
app.use(i18n)

app.mount('#app')
