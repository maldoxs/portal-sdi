<script setup>
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import { articles } from "../data/articles.js";

    const searchText = ref("");
    const filteredResults = ref([]);
    const router = useRouter();

    /* Normaliza para comparar sin tildes ni mayúsculas */
    const norm = (s = "") =>
        s
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

    /* Filtrado de artículos (en vivo) — misma funcionalidad, más robusto */
    const handleInput = () => {
        const q = norm(searchText.value);
        if (q.length > 0) {
            filteredResults.value = articles.filter((article) => norm(article.title).includes(q));
        } else {
            filteredResults.value = [];
        }
    };

    const clearSearch = () => {
        searchText.value = "";
    };
</script>

<template>
    <div
        class="hero-section p-5 d-flex flex-column align-items-center justify-content-center position-relative color">
        <h1 class="kb-category-title-buscador text-white">¿Cómo puedo ayudarte?</h1>

        <!-- Buscador estilo pill con ícono -->
        <form class="kb-search mt-4" role="search" @submit.prevent>
            <i class="bi bi-search kb-search-icon" aria-hidden="true"></i>
            <input
                type="search"
                class="form-control kb-search-input"
                v-model="searchText"
                placeholder="Buscar en la base de conocimientos..."
                aria-label="Buscar en la base de conocimientos"
                @input="handleInput" />
        </form>

        <!-- Resultados (dropdown) -->
        <div
            v-if="searchText.length > 0 && filteredResults.length > 0"
            class="kb-search-results"
            role="listbox">
            <router-link
                v-for="article in filteredResults"
                :key="article.id"
                :to="`/my-account/${article.id}`"
                class="dropdown-item d-flex align-items-start p-3 text-start text-decoration-none text-dark"
                role="option"
                @click="clearSearch">
                <i class="bi bi-file-earmark-text text-muted me-3 mt-1"></i>
                <div>
                    <strong class="d-block">{{ article.title }}</strong>
                    <p class="text-muted mb-0">{{ article.excerpt }}...</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use "../styles/variables" as *;

    /* Título del hero (mantiene tu fuente y color) */
    .hero-section h1 {
        font-family: $font-family-body;
        font-weight: 400;
        color: $text-title;
    }

    /* ====== Estilo del buscador tipo pill ====== */
    .kb-search {
        position: relative;
        width: min(860px, 92vw); // ancho similar al mock
    }

    .kb-search-input {
        height: 56px;
        border-radius: 9999px;
        border: none; // sin borde bootstrap
        padding-left: 56px; // espacio para el ícono
        font-size: 16px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    }

    .kb-search-input::placeholder {
        color: #9aa3af; // gris placeholder
    }

    .kb-search-input:focus {
        outline: none;
        border: none;
        // halo suave sobre el fondo azul
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.6), 0 0 0 5px rgba(36, 78, 141, 0.35);
    }

    .kb-search-icon {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 22px;
        color: #111;
        pointer-events: none;
    }

    /* ====== Dropdown de resultados ====== */
    .kb-search-results {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: min(860px, 92vw); // mismo ancho del input
        top: calc(100% + 8px); // debajo del input
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        overflow: auto; // scroll si hay muchos resultados
        max-height: 360px; // límite de alto
        box-shadow: 0 8px 24px rgba(16, 24, 40, 0.12);
        z-index: 100;
    }

    /* Separadores suaves entre resultados */
    .kb-search-results .dropdown-item + .dropdown-item {
        border-top: 1px solid #f0f2f5;
    }

    .dropdown-item:hover,
    .dropdown-item:focus {
        background-color: $gray-lighter;
    }

    /* Asegura contexto posicionado */
    .position-relative {
        position: relative;
    }
</style>
