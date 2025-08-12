<template>
    <div class="row">
        <h2 class="mb-4 kb-category-title">Temas de ayuda</h2>

        <div v-for="t in items" :key="t.slug" class="col-md-6 mb-4">
            <router-link
                :to="{ name: 'Category', params: { categorySlug: t.slug } }"
                class="card h-100 p-3 text-decoration-none text-dark d-flex flex-row align-items-start">
                <!-- Ícono -->
                <span class="kb-topic-icon me-3 mt-4" aria-hidden="true">
                    <!-- Prefiere SVG; si no hay, usa la clase existente -->
                    <span v-if="t.iconSvg" v-html="t.iconSvg"></span>
                    <i v-else :class="t.iconClass || t.icon"></i>
                </span>

                <!-- Texto -->
                <div class="py-4">
                    <small class="topic-count">{{ articlesLabel(t.count) }}</small>
                    <h5 class="mt-1 mb-1 kb-topic-title d-flex align-items-baseline gap-2">
                        <span>{{ t.display }}</span>
                    </h5>
                    <p class="text-muted mb-0 kb-topic-desc">{{ t.description }}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
    import { computed } from "vue";
    import { topics } from "../data/topics.js"; // usa tu alias
    import { articles } from "../data/articles.js"; // fuente para los conteos

    /* slugify para empatar category de articles.js con topics.js */
    const slugify = (s) =>
        (s || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-") || "general";

    /* Conteos reales por categoría */
    const countsBySlug = computed(() =>
        articles.reduce((acc, a) => {
            const s = slugify(a.category);
            acc[s] = (acc[s] || 0) + 1;
            return acc;
        }, {})
    );

    /* Lista a renderizar: respeta tu orden y añade count */
    const items = computed(() =>
        [...topics]
            .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
            .map((t) => ({
                ...t,
                count: countsBySlug.value[t.slug] ?? 0,
            }))
    );

    /* Etiqueta “(N artículos)” con singular/plural correcto */
    const articlesLabel = (n) => `(${n} artículo${n === 1 ? "" : "s"})`;
</script>

<style scoped>
    /* Icono consistente (como el primer pantallazo) */
    .kb-topic-icon {
        width: 44px;
        height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    /* Aplicar tamaño/grosor/color a TODOS los svg */
    .kb-topic-icon svg {
        width: 44px;
        height: 44px;
        stroke: #295ba7; /* azul del diseño */
        stroke-width: 1.75; /* grosor uniforme */
        fill: none; /* estilo outline */
        display: block;
    }

    /* Si cae al fallback <i class="bi ..."> */
    .kb-topic-icon i {
        font-size: 44px;
        color: #295ba7;
        line-height: 1;
    }

    /* Tipografías (título ~18px, descripción ~15px) */
    .kb-topic-title {
        font-size: 18px;
        font-weight: 600;
    }
    .kb-topic-desc {
        font-size: 15px;
    }

    /* Badge gris para el contador, como en el pantallazo */
    .topic-count {
        font-size: 14px;
        color: #6b7280; /* gris medio */
        font-weight: 400;
    }

    /* Opcional: hover suave del card */
    .card:hover {
        box-shadow: 0 6px 18px rgba(16, 24, 40, 0.08);
    }
</style>
