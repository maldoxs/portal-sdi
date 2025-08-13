<script setup>
    import HeroSection from "../components/HeroSection.vue";
    import HelpTopics from "../components/HelpTopics.vue";
    import PopularArticles from "../components/PopularArticles.vue";
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
                </div>
            </div>
        </div>
    </div>
</template>

<!--
EFunción: Es la vista de la página de inicio.

Lógica:
Simplemente actúa como un contenedor para los componentes principales de la página de inicio.
Renderiza HeroSection (el buscador), HelpTopics (los temas de ayuda) y PopularArticles (los artículos populares).
Dependencias: HeroSection.vue, HelpTopics.vue, PopularArticles.vue.
Observaciones: Su función es principalmente estructural, organizando los componentes en la página de aterrizaje.
-->
