<script setup>
    import ArticleList from "../components/ArticleList.vue";
    import Breadcrumbs from "../components/Breadcrumbs.vue";
    // import NeedSupport from "../components/NeedSupport.vue";

    import { computed } from "vue";
    import { useRoute } from "vue-router";

    /* Ajusta estas rutas si tu estructura es distinta */
    import { topics } from "../data/topics.js";
    import { articles } from "../data/articles.js";

    const route = useRoute();

    /* slugify */
    const slugify = (s) =>
        (s || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-") || "general";

    /* slug actual */
    const categorySlug = computed(() => String(route.params.categorySlug || "my-account"));

    /* Meta de la categoría actual */
    const current = computed(
        () =>
            topics.find((t) => t.slug === categorySlug.value) || {
                display: "My Account",
                description: "How to manage your account and it's features.",
                icon: "bi bi-person-gear",
            }
    );

    /* Conteos por categoría */
    const countsBySlug = computed(() =>
        articles.reduce((acc, a) => {
            const s = slugify(a.category);
            acc[s] = (acc[s] || 0) + 1;
            return acc;
        }, {})
    );

    /* Validación */
    const filteredCount = computed(() => countsBySlug.value[categorySlug.value] || 0);

    /* Sidebar: mismas categorías que Home */
    const categories = computed(() =>
        [...topics]
            .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
            .map((t) => ({
                slug: t.slug,
                display: t.display,
                count: countsBySlug.value[t.slug] || 0,
            }))
    );
</script>

<template>
    <div class="container my-5">
        <Breadcrumbs />

        <div class="row">
            <!-- Columna principal -->
            <div class="col-lg-8">
                <div class="d-flex align-items-start mb-2">
                    <i :class="current.icon" class="me-3 kb-color" style="font-size: 32px"></i>
                    <div>
                        <h4 class="mb-1">{{ current.display }}</h4>
                        <p class="text-muted mb-0">{{ current.description }}</p>
                    </div>
                </div>

                <div v-if="filteredCount > 0" class="">
                    <ArticleList :category-slug="categorySlug" />
                </div>
                <div v-else class="alert alert-secondary">
                    No hay artículos en esta categoría por ahora.
                </div>
            </div>

            <!-- Sidebar categorías -->
            <div class="col-lg-4 d-none d-lg-block">
                <div class="card p-4 sticky-top fondo" style="top: 20px">
                    <h5 class="mb-3 kb-article-title">Categorías de la base de conocimientos</h5>
                    <ul class="list-unstyled mb-0">
                        <li v-for="c in categories" :key="c.slug" class="mb-2 kb-article-excerpt">
                            <RouterLink
                                :to="{ name: 'Category', params: { categorySlug: c.slug } }"
                                class="sidebar-link d-flex justify-content-between"
                                :class="{ active: c.slug === categorySlug }">
                                <span>{{ c.display }}</span>
                                <span class="text-muted">({{ c.count }})</span>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <!-- <div class="card p-4 mt-3"><NeedSupport /></div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
    /* Fondo suave del recuadro */
    .fondo {
        background-color: #f4f5f5;
    }

    /* Enlaces del sidebar (base) */
    .sidebar-link {
        color: #374151; /* gris oscuro por defecto */
        text-decoration: none;
        padding: 6px 8px;
        border-radius: 4px;
    }
    .sidebar-link:hover {
        color: #0064a0;
    }

    /* Estado ACTIVO — sin !important */
    .card .sidebar-link.active {
        color: #0064a0; /* azul seleccionado */
        font-weight: 500;
        /* background-color: #eff6ff; */
    }

    /* Opcional: transición suave */
    .sidebar-link,
    .card .sidebar-link.active {
        transition: color 0.12s ease, background-color 0.12s ease;
    }
</style>
