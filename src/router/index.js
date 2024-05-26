import { createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue'; //Importa el componente Home


//Crea un array de las rutas de los elementos
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pathMatch(.*)*', //Ruta comodín para cualquier ruta no definida
        name: 'NotFound',
        component: () => import('../views/NotFound.vue') //Componente para página no encontrada
    },
    //Otras rutas
];

// Se crea la instancia de la ruta
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;