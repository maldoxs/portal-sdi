<template>
    <div>
        <div
            v-for="article in paginatedArticles"
            :key="article.id"
            class="border-top kb-sidebar-padding">
            <h4 class="kb-article-title">
                <router-link
                    :to="{
                        name: 'Article',
                        params: { categorySlug: categorySlug, articleId: article.id },
                        query: { page: currentPage }, // ✅ Pasa la página actual
                    }"
                    class="text-decoration-none text-dark"
                    >{{ article.title }}</router-link
                >
            </h4>
            <p class="kb-article-excerpt line-height-compact">{{ article.excerpt }}</p>
        </div>

        <div v-if="totalPages > 1" class="d-flex justify-content-start mt-4">
            <button class="btn btn-light me-2" @click="prevPage" :disabled="currentPage === 1">
                &lt; Anterior
            </button>
            <button class="btn btn-light" @click="nextPage" :disabled="currentPage === totalPages">
                Siguiente &gt;
            </button>
        </div>
    </div>
</template>

<script setup>
    import { computed, ref, watch } from "vue";
    import { useRoute } from "vue-router"; // Importa useRoute

    // Obtiene la ruta actual
    const route = useRoute();

    const props = defineProps({
        articlesToDisplay: {
            type: Array,
            required: true,
        },
        categorySlug: {
            type: String,
            required: true,
        },
    });

    // Define el estado local de la paginación
    const currentPage = ref(parseInt(route.query.page) || 1); //  Lee la página de la URL
    const pageSize = 5;

    // Lógica de paginación
    const paginatedArticles = computed(() => {
        const start = (currentPage.value - 1) * pageSize;
        const end = start + pageSize;
        return props.articlesToDisplay.slice(start, end);
    });

    // Observa cambios en la URL (parámetro 'page')
    watch(
        () => route.query.page,
        (newPage) => {
            currentPage.value = parseInt(newPage) || 1;
        }
    );

    // Función para cambiar de página
    const changePage = (page) => {
        // Evita navegar a páginas fuera de rango
        if (page >= 1 && page <= totalPages.value) {
            currentPage.value = page;
            // ✅ Emite el evento para que Account.vue actualice la URL
            emit("update:currentPage", page);
        }
    };

    // Lógica de paginación...
    const totalPages = computed(() => Math.ceil(props.articlesToDisplay.length / pageSize));
    const pages = computed(() => {
        const result = [];
        for (let i = 1; i <= totalPages.value; i++) {
            result.push(i);
        }
        return result;
    });

    const nextPage = () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
        }
    };

    const prevPage = () => {
        if (currentPage.value > 1) {
            currentPage.value--;
        }
    };
</script>

<style scoped>
    .kb-article-title {
        line-height: 1.2;
    }
    .kb-article-excerpt {
        line-height: 1.4;
    }
</style>

<!--
Función: Muestra una lista de artículos con paginación.

Lógica:
Utiliza ref para la página actual (currentPage) y computed para calcular qué artículos mostrar de articles.js según el tamaño de la página (pageSize = 5).
Proporciona dos botones, "Anterior" y "Siguiente", para navegar entre las páginas, deshabilitándolos en los límites.
Dependencias: articles.js, Vue Router.
Observaciones: Es un componente reutilizable, pensado para ser usado en vistas como Account.vue, donde la lista de artículos es larga.
-->
