<template>
    <div class="container my-5">
        <h2 class="mb-4">{{ categoryName }}</h2>

        <div class="row">
            <!-- Menú lateral de categorías -->
            <div class="col-lg-4 d-none d-lg-block">
                <KnowledgeBaseCategories :activeCategory="categoryName" />
            </div>

            <!-- Contenido principal: lista de artículos -->
            <div class="col-lg-8">
                <div
                    v-for="article in filteredArticles"
                    :key="article.id"
                    :id="article.id"
                    class="card p-4 mb-4">
                    <h3 class="card-title">{{ article.title }}</h3>
                    <p class="card-text text-muted">{{ article.excerpt }}</p>
                    <router-link
                        :to="`/article/${article.id}`"
                        class="btn btn-outline-primary align-self-start"
                        >Read more</router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from "vue";
    import { useRoute } from "vue-router";
    import { articles } from "../data/articles.js";
    import KnowledgeBaseCategories from "../components/KnowledgeBaseCategories.vue"; // Importamos el nuevo componente

    const route = useRoute();
    const activeArticleId = ref("");
    const headingElements = ref([]);

    // Obtiene la categoría de la ruta
    const categoryName = computed(() => {
        return route.params.categoryName;
    });

    // Filtra los artículos según el nombre de la categoría
    const filteredArticles = computed(() => {
        return articles.filter((article) => article.category === categoryName.value);
    });
</script>

<style scoped>
    /* No hay estilos de menú de anclaje aquí, ya que se manejan en el nuevo componente */
</style>
