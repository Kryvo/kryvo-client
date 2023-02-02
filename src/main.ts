import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './routes/routes.js'

createApp(App).use(router).mount('#app')
