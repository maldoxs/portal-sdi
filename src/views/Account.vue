<template>
    <div class="container my-5">
        <Breadcrumbs :items="[{ text: current.display }]" />

        <div class="row">
            <div class="col-lg-8">
                <div class="d-flex align-items-start mb-2">
                    <i :class="current.icon" class="me-3 kb-color" style="font-size: 32px"></i>
                    <div>
                        <h4 class="mb-1">{{ current.display }}</h4>
                        <p class="text-muted mb-0">{{ current.description }}</p>
                    </div>
                </div>

                <div v-if="filteredArticles.length > 0">
                    <ArticleList
                        :articles-to-display="filteredArticles"
                        :category-slug="categorySlug" />
                </div>
                <div v-else class="alert alert-secondary">
                    No hay artículos en esta categoría por ahora.
                </div>
            </div>

            <div class="col-lg-4 d-none d-lg-block">
                <div class="card p-4 sticky-top fondo" style="top: 20px">
                    <h5 class="mb-3 kb-article-title">Categorías de la base de conocimientos</h5>
                    <ul class="list-unstyled mb-0">
                        <li v-for="c in categories" :key="c.slug" class="mb-2 kb-article-excerpt">
                            <RouterLink
                                :to="{ name: 'Category', params: { categorySlug: c.slug } }"
                                class="d-flex justify-content-between text-decoration-none p-2 rounded-2"
                                :class="{ 'active-category': c.slug === categorySlug }">
                                <span>{{ c.display }}</span>
                                <span class="text-muted">({{ c.count }})</span>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import { topics } from "../data/topics.js";
    import { articles } from "../data/articles.js";
    import Breadcrumbs from "../components/Breadcrumbs.vue";
    import ArticleList from "../components/ArticleList.vue";

    const route = useRoute();

    const categorySlug = computed(() => String(route.params.categorySlug || "my-account"));

    const current = computed(() => topics.find((t) => t.slug === categorySlug.value) || topics[0]);

    const countsBySlug = computed(() =>
        articles.reduce((acc, article) => {
            acc[article.category] = (acc[article.category] || 0) + 1;
            return acc;
        }, {})
    );

    const categories = computed(() =>
        [...topics]
            .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
            .map((t) => ({
                ...t,
                count: countsBySlug.value[t.slug] || 0,
            }))
    );

    const filteredArticles = computed(() => {
        const targetSlug = categorySlug.value;
        return articles.filter((a) => a.category === targetSlug);
    });
</script>

<style scoped>
    /* Estilos del sidebar de categorías */
    .fondo {
        background-color: #f4f5f5;
    }

    /* Estilo para el enlace activo */
    .active-category {
        /* background-color: #0064a0;  Color de fondo azul  */
        color: #0064a0 !important; /* Color del texto blanco */
        font-weight: bold;
    }

    /* Estilos para los enlaces normales */
    .text-dark {
        color: #374151 !important;
    }

    .text-dark:hover {
        color: #0064a0 !important;
    }
</style>

<!--

Función: Actúa como la vista de la página "Mi Cuenta" y de las páginas de categoría.

Lógica:
Utiliza la misma lógica que HelpTopics.vue para inferir la categoría actual a partir de la URL y contar los artículos.
Muestra un encabezado dinámico con el ícono y la descripción de la categoría.
Renderiza el componente ArticleList para mostrar los artículos paginados de la categoría actual.
Incluye una barra lateral con la lista de todas las categorías.
Dependencias: ArticleList.vue, Breadcrumbs.vue, topics.js, articles.js, Vue Router.
Observaciones: Es una vista versátil que se utiliza para múltiples rutas gracias al enrutamiento dinámico.

-->
