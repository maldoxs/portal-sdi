<script setup>
    import ArticleList from "../components/ArticleList.vue";
    import Breadcrumbs from "../components/Breadcrumbs.vue";
    //import NeedSupport from "../components/NeedSupport.vue";
</script>
<template>
    <div class="container my-5">
        <Breadcrumbs />
        <div class="row">
            <div class="col-lg-8">
                <h2 class="mb-2"><i class="bi bi-person-fill me-2"></i>My Accounts</h2>
                <p class="text-muted mb-4">How to manage your account and it's features.</p>
                <ArticleList />
            </div>
            <div class="col-lg-4 d-none d-lg-block">
                <!-- <div class="card p-4">
                    <NeedSupport />
                </div> -->
            </div>
        </div>
    </div>
</template>

<!--
Esta es la vista de la página de "My Account". Su función es:
Servir como contenedor: Muestra el título de la categoría ("My Account") y un componente de lista de artículos (ArticleList.vue).
Es el punto de entrada para ver todos los artículos relacionados con las cuentas.

-->
