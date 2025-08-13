<template>
    <div class="row">
        <h2 class="mb-4 kb-category-title">Temas de ayuda</h2>

        <div v-for="t in categories" :key="t.slug" class="col-md-6 mb-4">
            <router-link
                :to="{ name: 'Category', params: { categorySlug: t.slug } }"
                class="card h-100 p-3 text-decoration-none text-dark d-flex flex-row align-items-start">
                <span class="kb-topic-icon me-3 mt-4" aria-hidden="true">
                    <i :class="t.icon"></i>
                </span>

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
    import { topics } from "../data/topics.js";
    import { articles } from "../data/articles.js";

    const countsBySlug = computed(() =>
        articles.reduce((acc, article) => {
            acc[article.category] = (acc[article.category] || 0) + 1;
            return acc;
        }, {})
    );

    const articlesLabel = (count) => {
        if (count === 0) return "0 artículos";
        if (count === 1) return "1 artículo";
        return `${count} artículos`;
    };

    const categories = computed(() =>
        [...topics]
            .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
            .map((t) => ({
                ...t,
                count: countsBySlug.value[t.slug] || 0,
            }))
    );
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

<!--
Función: Muestra una cuadrícula de categorías de ayuda.

Lógica:
Combina datos de topics.js y articles.js para mostrar el nombre de la categoría, su descripción, un ícono y el número total de artículos.
Utiliza una función slugify para estandarizar los nombres y emparejar categorías y artículos.
La propiedad computed items se encarga de ordenar las categorías y añadirles el conteo.
Dependencias: topics.js, articles.js, Vue Router.
Observaciones: Es un componente clave en la página de inicio para que los usuarios puedan explorar temas.

-->
