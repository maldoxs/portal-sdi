<template>
    <div class="container my-4">
        <Breadcrumbs
            :items="[{ text: 'Home', to: '/' }, { text: 'Categorías' }, { text: categoryDisplay }]"
            class="mb-3" />

        <div class="row gx-4">
            <!-- Contenido principal -->
            <main class="col-12 col-lg-8">
                <div class="d-flex align-items-start mb-4">
                    <i :class="iconClass" class="me-3" style="font-size: 48px"></i>
                    <div>
                        <h2 class="mb-1 kb-category-title">{{ categoryDisplay }}</h2>

                        <p class="text-muted mb-0">{{ categoryDescription }}</p>
                    </div>
                </div>

                <hr class="my-4" />

                <div v-if="filtered.length">
                    <div v-for="a in filtered" :key="a.id" class="py-3 border-bottom">
                        <RouterLink
                            :to="{ name: 'Article', params: { articleId: a.id } }"
                            class="text-decoration-none">
                            <h4 class="mb-1">{{ a.title }}</h4>
                        </RouterLink>
                        <p class="text-muted mb-0">{{ a.excerpt }}</p>
                    </div>
                </div>

                <div v-else class="alert alert-secondary">
                    No hay artículos en esta categoría por ahora.
                </div>
            </main>

            <!-- Sidebar de categorías -->
            <aside class="col-12 col-lg-4 mt-4 mt-lg-0">
                <div class="card p-4 sticky-top" style="top: 20px">
                    <h5 class="mb-3">Categorías de la base de conocimientos</h5>
                    <ul class="list-unstyled mb-0">
                        <li v-for="c in categories" :key="c.slug" class="mb-2">
                            <RouterLink
                                :to="{ name: 'Category', params: { categorySlug: c.slug } }"
                                class="d-flex justify-content-between text-decoration-none"
                                :class="{ 'fw-semibold': c.slug === categorySlug }">
                                <span>{{ c.display }}</span>
                                <span class="text-muted">({{ c.count }})</span>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    </div>
</template>

<script setup>
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import Breadcrumbs from "../components/Breadcrumbs.vue";
    import { topics } from "../data/topics.js";
    import { articles } from "../data/articles.js";

    const route = useRoute();

    const slugify = (s) =>
        (s || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-") || "general";

    const categorySlug = computed(() =>
        String(route.params.categorySlug || topics[0]?.slug || "my-account")
    );

    /* Conteo real por categoría */
    const countsBySlug = computed(() =>
        articles.reduce((acc, a) => {
            const s = slugify(a.category);
            acc[s] = (acc[s] || 0) + 1;
            return acc;
        }, {})
    );

    /* Sidebar (dinámico, mismo orden que Home) */
    const categories = computed(() =>
        [...topics]
            .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
            .map((t) => ({
                slug: t.slug,
                display: t.display,
                description: t.description,
                icon: t.icon,
                count: countsBySlug.value[t.slug] || 0,
            }))
    );

    const current = computed(
        () => categories.value.find((c) => c.slug === categorySlug.value) || categories.value[0]
    );

    const categoryDisplay = computed(() => current.value?.display || "");
    const categoryDescription = computed(() => current.value?.description || "");
    const iconClass = computed(() => current.value?.icon || "bi bi-folder");

    /* Artículos de la categoría */
    const filtered = computed(() =>
        articles.filter((a) => slugify(a.category) === categorySlug.value)
    );
</script>

<!--
Función: Muestra una lista de artículos de una categoría específica.

Lógica:

Obtiene el categorySlug de la URL para filtrar los artículos de articles.js.
Muestra un encabezado con la información de la categoría (display, description, icon).
Incluye una barra lateral que lista todas las categorías con sus respectivos conteos de artículos, similar a Account.vue.
Dependencias: Breadcrumbs.vue, topics.js, articles.js, Vue Router.
Observaciones: Al igual que Account.vue, esta vista está diseñada para la navegación por categorías, pero utiliza un diseño de lista diferente.


-->
