import { createApp } from "vue";
import App from "./App.vue";

// 1. Importa Vue Router y el archivo de configuración
import router from "./router";

// 2. Importa los estilos de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// 3. Importa tus estilos personalizados
import "./assets/style.css";
import "./styles/main.scss"; // <-- Aquí se importa el archivo SCSS

// Crea la instancia de la aplicación
const app = createApp(App);

// 4. Usa el router en la aplicación
app.use(router);

// Monta la aplicación en el DOM
app.mount("#app");

/*
Función: Punto de entrada de la aplicación.

Lógica:
Crea la instancia de la aplicación Vue.
Configura y usa el enrutador (router/index.js).
Importa todos los archivos CSS y SCSS globales (bootstrap, bootstrap-icons, style.css, main.scss).
Monta la aplicación en el elemento #app del DOM.
Dependencias: Vue, Vue Router, Bootstrap.

*/
