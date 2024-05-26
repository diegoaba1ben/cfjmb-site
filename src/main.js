import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(router) // uso del router creado


app.mount('#app');
