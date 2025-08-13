// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";
import Article from "../views/Article.vue";

// ⚠️ No importamos Category.vue porque Account reemplaza esa pantalla

const routes = [
    { path: "/", name: "Home", component: Home },

    // Pantalla de categoría usando Account.vue
    { path: "/my-account", name: "Account", component: Account },
    { path: "/category/:categorySlug", name: "Category", component: Account },

    // Artículo (ruta dinámica existente)
    { path: "/my-account/:articleId", name: "Article", component: Article },

    // (Opcional) catch-all para rutas desconocidas
    // { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

/*

Función: Archivo de configuración del enrutador (Vue Router).

Lógica:
Define las rutas de la aplicación: / (Home), /my-account (Account), /category/:categorySlug (Category), y /my-account/:articleId (Article).
Utiliza createWebHistory para rutas amigables.
Define rutas dinámicas para las categorías y los artículos.
Dependencias: Vue Router.
Observaciones: Es crucial para la navegación de la aplicación.
*/
