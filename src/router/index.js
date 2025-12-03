import { createRouter, createWebHistory } from "vue-router";
import Lupa from "../pages/Lupa.vue";
import Inicio from "../pages/Inicio.vue";
import Galeria from "../pages/Galeria.vue";
import Favoritos from "../pages/Favoritos.vue";
import Userpage from "../pages/Userpage.vue";


const routes = [
    {
        path: "/",
        component: Inicio,
    },
    {
        path: "/galeria",
        component: Galeria,
    },
    {
        path:"/favoritos",
        component: Favoritos,
    },
    {
        path:"/lupa",
        component: Lupa,
    },
    {
        path:"/usePage",
        component: Userpage,
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;