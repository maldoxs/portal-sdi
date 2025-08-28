<script setup>
    import { ref, computed } from "vue";
    import { useRoute } from "vue-router";
    import HeroSection from "../components/HeroSection.vue";
    import Breadcrumbs from "../components/Breadcrumbs.vue";
    import ArticleList from "../components/ArticleList.vue";
    import { topics } from "../data/topics.js";
    import { articles } from "../data/articles.js";

    const route = useRoute();
    const query = ref("");

    const categorySlug = computed(() => String(route.params.categorySlug || "my-account"));
    const current = computed(() => topics.find((t) => t.slug === categorySlug.value) || topics[0]);
    const filtered = computed(() => articles.filter((a) => a.category === current.value.slug));

    // icono dinámico (con fallback)
    const currentIconClass = computed(() => current.value?.iconClass || "bi bi-journal-text");
</script>

<template>
    <div class="account-view">
        <!-- HERO: sin título + breadcrumbs blancos junto al buscador -->
        <HeroSection :show-title="false" class="hero--category py-4 mt-0" attach-results-to="input">
            <template #presearch>
                <Breadcrumbs variant="inverted" class="account-view__crumbs" />
            </template>
        </HeroSection>

        <!-- Contenido blanco de la categoría -->
        <div class="container py-4">
            <div class="row">
                <div class="col-lg-8">
                    <div class="d-flex align-items-start mb-3">
                        <!-- ⬇️ ÍCONO DINÁMICO -->
                        <i
                            :class="[current.icon, 'fs-2', 'kb-color', 'me-2']"
                            aria-hidden="true"></i>
                        <div>
                            <h2 class="h4 mb-1">{{ current.display || current.title }}</h2>
                            <p class="mb-0 text-muted">{{ current.description }}</p>
                        </div>
                    </div>

                    <ArticleList :articles-to-display="filtered" :category-slug="categorySlug" />
                </div>

                <div class="col-lg-4">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Categorías de la base de conocimientos</h5>

                            <!-- Sidebar con activo + conteo alineado -->
                            <ul class="kb-cats list-unstyled mb-0">
                                <li
                                    v-for="t in topics"
                                    :key="t.slug"
                                    :class="[
                                        'kb-cats__item',
                                        { 'is-active': t.slug === current.slug },
                                    ]">
                                    <router-link
                                        class="kb-cats__link text-decoration-none"
                                        :to="{
                                            name: 'Category',
                                            params: { categorySlug: t.slug },
                                        }">
                                        <span class="kb-cats__name">{{
                                            t.display || t.title
                                        }}</span>
                                        <span class="kb-cats__count">
                                            ({{
                                                articles.filter((a) => a.category === t.slug)
                                                    .length
                                            }})
                                        </span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- bloque de soporte si aplica -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    /* ========= Sidebar ========= */
    .kb-cats__link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.375rem 0;
        color: #555;
        font-size: 16px;
        font-weight: 400;
    }
    .kb-cats__count {
        font-size: 0.875rem;
        color: #6b7280;
    }
    .kb-cats__item.is-active .kb-cats__name {
        font-weight: 900;
        color: var(--bs-primary);
    }
    .kb-cats__item.is-active .kb-cats__count {
        font-weight: 900;
        color: var(--bs-primary);
    }

    /* ========= HEADER DE CATEGORÍA SOLO AQUÍ ========= */
    /* 1) El .container del hero suele limitar el ancho. Lo liberamos solo en esta vista. */
    :deep(.hero--category .container) {
        max-width: 100%;
    }

    /* 2) Barra del hero: breadcrumbs IZQ + buscador DER, con aire lateral */
    :deep(.hero--category .kb-hero-bar) {
        display: flex;
        align-items: center;
        justify-content: space-between; /* izquierda ↔ derecha */
        width: 100%;
        max-width: 1440px;
        padding: 0 76px; /* aire en los costados */
        margin: 0 auto;
        gap: 20px;
    }

    /* 3) Breadcrumbs: anclados a la IZQUIERDA (ya blancos por variant) */
    .account-view__crumbs {
        margin: 0;
        line-height: 1.1;
    }
    :deep(.hero--category .kb-hero-bar > .breadcrumbs) {
        flex: 0 0 auto;
    }

    /* 4) Buscador: más angosto SOLO en esta vista */
    :deep(.hero--category .kb-search) {
        position: relative; /* para que el dropdown se ancle al form (attach-results-to="input") */
        width: clamp(360px, 36vw, 560px); /* ⬅️ más pequeño que el home, responsivo */
        margin-left: auto; /* se mantiene a la derecha */
    }

    /* 5) Dropdown del buscador (adjunto al input): mismo ancho que el input */
    :deep(.hero--category .kb-search > .kb-search-results) {
        left: 0;
        right: 0;
        transform: none;
        width: 100%;
        max-width: none;
        z-index: 1000;
    }

    /* ====== Breakpoints (responsivo como tu 2ª imagen) ====== */
    @media (max-width: 992px) {
        :deep(.hero--category .kb-hero-bar) {
            flex-direction: column; /* breadcrumbs arriba, input abajo */
            align-items: stretch; /* ancho completo */
            padding: 0 24px; /* gutters móviles */
            gap: 12px;
        }
        .account-view__crumbs {
            margin: 0 0 4px 0;
        }
        :deep(.hero--category .kb-search) {
            width: 100%; /* input full‑width en móviles/tablet */
            margin-left: 0;
        }
        :deep(.hero--category .kb-search > .kb-search-results) {
            left: 0;
            right: 0;
            width: 100%;
            max-width: none;
        }
    }

    /* Oculta el botón nativo de limpiar en inputs type="search" (deja solo la X custom) */
    .kb-search-input::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
        display: none;
    }
    .kb-search-input::-ms-clear {
        display: none;
        width: 0;
        height: 0;
    }
    .kb-search-input::-o-clear {
        display: none;
    }

    @media (max-width: 576px) {
        :deep(.hero--category .kb-hero-bar) {
            padding: 0 16px;
        }
        /* Si lo quieres más compacto:
     :deep(.hero--category .kb-search-input) { height: 48px; } */
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

<!-- cambiosss -->
