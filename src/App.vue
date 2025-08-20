<script setup>
    import Header from "./components/Header.vue";
    import Footer from "./components/Footer.vue"; // ✅ Importa el componente
    // ... otros componentes
</script>

<template>
    <div>
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<!--
Función: Es el componente raíz de la aplicación.

Lógica: Muestra el Header y el área principal donde se renderizan las vistas (<router-view />) según la ruta actual.
Dependencias: Header.vue, Vue Router.
Observaciones: Actúa como el layout principal de la aplicación.


-->
