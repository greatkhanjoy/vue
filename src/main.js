// import Alpine from 'alpinejs'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
 
// window.Alpine = Alpine
 
// Alpine.start()
createApp(App)
.use(store)
.use(router)
.mount('#app')
