<template>
    <div class="mb-4 p-4 rounded-3">
        <h5 class="mb-3 fw-bold mb-3 pb-3 kb-article-title">Artículos Populares</h5>
        <ul class="list-unstyled">
            <li
                v-for="article in popularArticles"
                :key="article.id"
                class="mb-2 kb-article-excerpt">
                <a href="#" class="text-decoration-none text-dark d-flex align-items-center">
                    <span :class="article.icon" class="me-2 text-primary"></span>
                    {{ article.title }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    const popularArticles = ref([
        { id: 1, title: "Cómo crear una cuenta", icon: "bi bi-file-earmark-text" },
        {
            id: 2,
            title: "¿Cómo funciona la garantía de devolución de 30 días?",
            icon: "bi bi-file-earmark-text",
        },
        {
            id: 3,
            title: "Cómo funcionan nuestros planes de precios",
            icon: "bi bi-file-earmark-text",
        },
        {
            id: 4,
            title: "Mejores prácticas para la seguridad de la cuenta",
            icon: "bi bi-file-earmark-text",
        },
        {
            id: 5,
            title: "¿Cómo puedo editar mi página existente?",
            icon: "bi bi-file-earmark-text",
        },
    ]);
</script>

<style scoped>
    .fondo {
        background-color: #f8f9fa;
    }
    a:hover {
        color: #295ba7 !important;
    }
</style>

<!--

Función: Muestra una lista estática de artículos populares.

Lógica:
Renderiza una lista de artículos con datos codificados directamente en el componente.
Actualmente, los enlaces no son dinámicos ni se basan en una lógica real.
Dependencias: Ninguna (datos internos).
Observaciones: Es un componente simple para la barra lateral que podría ser mejorado para obtener artículos populares de manera dinámica.

-->
