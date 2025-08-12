<script setup>
    import HeroSection from "../components/HeroSection.vue";
    import HelpTopics from "../components/HelpTopics.vue";
    import PopularArticles from "../components/PopularArticles.vue";
    // import NeedSupport from "../components/NeedSupport.vue";
</script>

<template>
    <div class="container-fluid color">
        <div class="col-lg-12 d-flex justify-content-center">
            <HeroSection />
        </div>
    </div>
    <div class="container my-5">
        <div class="row">
            <div class="col-lg-8">
                <HelpTopics />
            </div>
            <div class="col-lg-4 d-none d-lg-block">
                <div class="card p-4 fondo mt-5">
                    <PopularArticles />
                    <!-- <NeedSupport /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<!--
Esta es la vista de la página de inicio. Su función es:
Servir como contenedor: Contiene y organiza otros componentes como HeroSection.vue y ArticleList.vue (si estuviera en la página de inicio).
En este caso, su rol principal es ser la página de aterrizaje del sitio.
-->
