import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'; //Importa Vuetify
import axios from './plugins/axios'; // Importa axios

const app = createApp(App);

app.config.globalProperties.$axios = axios //Vuelve a axios disponible para todos los componentes.
app.use(router) // uso del enrutador creado
app.use(vuetify); // Usa Vuetify


app.mount('#app');
