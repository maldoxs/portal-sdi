<template>
    <div class="card p-4 sticky-top" style="top: 20px">
        <h5 class="card-title">Categorías de la base de conocimientos</h5>
        <nav class="nav nav-pills flex-column">
            <!-- Iteramos sobre todas las categorías para generar los enlaces -->
            <router-link
                v-for="category in categories"
                :key="category.id"
                :to="`/category/${category.id}`"
                class="nav-link"
                :class="{ active: activeCategory === category.id }"
                >{{ category.title }}</router-link
            >
        </nav>
    </div>
</template>

<script setup>
    import { computed } from "vue";
    import { articles } from "../data/articles.js";

    // Define la prop para la categoría activa
    const props = defineProps({
        activeCategory: {
            type: String,
            required: true,
        },
    });

    // Extraemos una lista de categorías únicas de los artículos
    const categories = computed(() => {
        const categoryMap = new Map();
        articles.forEach((article) => {
            if (!categoryMap.has(article.category)) {
                categoryMap.set(article.category, {
                    id: article.category,
                    title: article.category,
                });
            }
        });
        return Array.from(categoryMap.values());
    });
</script>

<style scoped>
    /* Estilos para el menú lateral */
    .nav-link {
        color: #555;
        border-radius: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
    .nav-link.active {
        background-color: #295ba7;
        color: white;
        font-weight: bold;
        border-radius: 0.25rem;
    }
    .nav-link:hover,
    .nav-link:focus {
        background-color: transparent;
        color: #555;
        font-weight: normal;
    }
    .nav-link.active:hover,
    .nav-link.active:focus {
        background-color: #295ba7;
        color: white;
        font-weight: bold;
    }
</style>
