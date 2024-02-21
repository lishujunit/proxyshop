import './assets/css/plugins.css'
import './assets/css/style.css'
import './assets/css/colors/violet.css'
import './assets/css/fonts/urbanist.css'
import './assets/css/floating-sidebar-chunk.css'
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'



const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
