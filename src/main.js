import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/Login.css'
import '@/assets/style/styles.css'
import router from './router.js'
import store from './store'
import axios from 'axios'
let app = createApp(App);
axios.defaults.baseURL = 'http://localhost:8080'
app.config.globalProperties.axios = axios;
app.use(store).use(router).mount('#app')