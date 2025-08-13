<script setup>
    import { ref, computed } from "vue";
    import { articles } from "../data/articles.js";

    const currentPage = ref(1);
    const pageSize = 5;

    // Artículos a mostrar en la página actual
    const paginatedArticles = computed(() => {
        const startIndex = (currentPage.value - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return articles.slice(startIndex, endIndex);
    });

    const nextPage = () => {
        if (currentPage.value * pageSize < articles.length) {
            currentPage.value++;
        }
    };

    const prevPage = () => {
        if (currentPage.value > 1) {
            currentPage.value--;
        }
    };
</script>

<template>
    <div>
        <div
            v-for="article in paginatedArticles"
            :key="article.id"
            class="border-top kb-sidebar-padding">
            <h4 class="kb-article-title">
                <router-link
                    :to="`/my-account/${article.id}`"
                    class="text-decoration-none text-dark"
                    >{{ article.title }}</router-link
                >
            </h4>
            <p class="kb-article-excerpt">{{ article.excerpt }}</p>
        </div>

        <!-- Controles de paginación -->
        <div class="d-flex justify-content-start mt-4">
            <button class="btn btn-light me-2" @click="prevPage" :disabled="currentPage === 1">
                &lt; Anterior
            </button>
            <button
                class="btn btn-light"
                @click="nextPage"
                :disabled="currentPage * pageSize >= articles.length">
                Siguiente &gt;
            </button>
        </div>
    </div>
</template>

<!--
Función: Muestra una lista de artículos con paginación.

Lógica:
Utiliza ref para la página actual (currentPage) y computed para calcular qué artículos mostrar de articles.js según el tamaño de la página (pageSize = 5).
Proporciona dos botones, "Anterior" y "Siguiente", para navegar entre las páginas, deshabilitándolos en los límites.
Dependencias: articles.js, Vue Router.
Observaciones: Es un componente reutilizable, pensado para ser usado en vistas como Account.vue, donde la lista de artículos es larga.
-->
