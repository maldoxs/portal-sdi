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
