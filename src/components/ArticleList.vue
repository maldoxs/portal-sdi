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
Este componente es responsable de mostrar una lista paginada de artículos en la vista de "My Account". Su función es:
Mostrar una lista de artículos: Itera sobre la lista de artículos y crea un enlace para cada uno.
Manejar la paginación: Implementa la lógica para mostrar solo 5 artículos por página y proporciona los botones "Siguiente" y "Anterior".
Redireccionar al artículo: Al hacer clic en un título, el router-link redirige al usuario a la vista del artículo completo.
-->
