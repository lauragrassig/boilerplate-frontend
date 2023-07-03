import './assets/main.css'

import App from './App.vue'
import router from './router'

import { apiPlugin } from '@/auth'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(apiPlugin)

app.mount('#app')
