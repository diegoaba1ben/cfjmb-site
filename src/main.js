import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'; //Importa Vuetify

const app = createApp(App);
app.use(router) // uso del enrutador creado
app.use(vuetify); // Usa Vuetify


app.mount('#app');
