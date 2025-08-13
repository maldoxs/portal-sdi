<template>
    <div>
        <div
            v-for="article in paginatedArticles"
            :key="article.id"
            class="border-top kb-sidebar-padding">
            <h4 class="kb-article-title">
                <router-link
                    :to="{ name: 'Article', params: { articleId: article.id } }"
                    class="text-decoration-none text-dark"
                    >{{ article.title }}</router-link
                >
            </h4>
            <p class="kb-article-excerpt">{{ article.excerpt }}</p>
        </div>

        <div class="d-flex justify-content-start mt-4" v-if="totalPages > 1">
            <button class="btn btn-light me-2" @click="prevPage" :disabled="currentPage === 1">
                &lt; Anterior
            </button>
            <button
                class="btn btn-light"
                @click="nextPage"
                :disabled="currentPage * pageSize >= articlesToDisplay.length">
                Siguiente &gt;
            </button>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from "vue";

    const props = defineProps({
        articlesToDisplay: {
            type: Array,
            required: true,
        },
    });

    const currentPage = ref(1);
    const pageSize = 5;

    // ✅ Paginación ahora usa la prop `articlesToDisplay`
    const paginatedArticles = computed(() => {
        const startIndex = (currentPage.value - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return props.articlesToDisplay.slice(startIndex, endIndex);
    });

    const totalPages = computed(() => Math.ceil(props.articlesToDisplay.length / pageSize));

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

<!--
Función: Muestra una lista de artículos con paginación.

Lógica:
Utiliza ref para la página actual (currentPage) y computed para calcular qué artículos mostrar de articles.js según el tamaño de la página (pageSize = 5).
Proporciona dos botones, "Anterior" y "Siguiente", para navegar entre las páginas, deshabilitándolos en los límites.
Dependencias: articles.js, Vue Router.
Observaciones: Es un componente reutilizable, pensado para ser usado en vistas como Account.vue, donde la lista de artículos es larga.
-->
