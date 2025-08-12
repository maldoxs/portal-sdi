<template>
    <header class="border-bottom">
        <div class="container d-flex align-items-center justify-content-between py-3">
            <router-link to="/" class="text-decoration-none fw-bold kb-link"
                >Centro de Ayuda</router-link
            >

            <nav class="d-none d-md-flex gap-3">
                <router-link to="/" class="text-decoration-none kb-link">Inicio</router-link>
                <router-link :to="{ name: 'Account' }" class="text-decoration-none kb-link"
                    >Mi Cuenta</router-link
                >
                <router-link
                    :to="{ name: 'Category', params: { categorySlug: 'billing-and-payments' } }"
                    class="text-decoration-none kb-link"
                    >Facturación y pagos</router-link
                >
                <router-link
                    :to="{ name: 'Category', params: { categorySlug: 'developers' } }"
                    class="text-decoration-none kb-link"
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
