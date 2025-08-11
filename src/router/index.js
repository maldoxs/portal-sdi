import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";
import Article from "../views/Article.vue"; // <-- Importa la nueva vista

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/my-account", name: "Account", component: Account },
    { path: "/my-account/:articleId", name: "Article", component: Article }, // <-- Agrega la nueva ruta dinámica
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
