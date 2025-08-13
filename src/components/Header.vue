<template>
    <header class="border-bottom">
        <div class="container d-flex align-items-center justify-content-between py-3">
            <router-link to="/" class="text-decoration-none fw-bold kb-link"
                >Departamento Sistemas de Impuestos Directos e Indirectos Ayuda</router-link
            >

            <nav class="d-none d-md-flex gap-3">
                <router-link to="/" class="text-decoration-none fw-bold kb-link"
                    >Inicio</router-link
                >
                <router-link :to="{ name: 'Account' }" class="text-decoration-none fw-bold kb-link"
                    >Mi Cuenta</router-link
                >
                <router-link
                    :to="{ name: 'Category', params: { categorySlug: 'billing-and-payments' } }"
                    class="text-decoration-none fw-bold kb-link"
                    >Facturación y pagos</router-link
                >
                <router-link
                    :to="{ name: 'Category', params: { categorySlug: 'developers' } }"
                    class="text-decoration-none fw-bold kb-link"
                    >Desarrolladores</router-link
                >
            </nav>
        </div>
    </header>
</template>

<script setup>
    import "bootstrap/dist/js/bootstrap.bundle.min.js";
</script>

<style>
    .kb-link.fw-bold {
        font-weight: 400 !important;
    }
</style>

<!--

Función: Encabezado principal de la aplicación.
Lógica: Contiene el logo y una barra de navegación con enlaces estáticos a la página de inicio, "Mi Cuenta" y a algunas categorías principales.
Dependencias: Vue Router, Bootstrap.
Observaciones: Es un componente de diseño que se muestra en todas las páginas.

-->
