<script setup>
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import { articles } from "../data/articles.js"; // <-- Importa la base de datos de artículos

    const searchText = ref("");
    const filteredResults = ref([]);
    const router = useRouter();

    // Lógica de filtrado de artículos
    const handleInput = () => {
        if (searchText.value.length > 0) {
            const query = searchText.value.toLowerCase();
            filteredResults.value = articles.filter((article) =>
                article.title.toLowerCase().includes(query)
            );
        } else {
            filteredResults.value = [];
        }
    };

    const handleSearch = () => {
        if (filteredResults.value.length > 0) {
            router.push(`/my-account/${filteredResults.value[0].id}`);
            clearSearch();
        }
    };

    const clearSearch = () => {
        searchText.value = "";
    };
</script>
<template>
    <div
        class="hero-section p-5 bg-light col-lg-8 d-flex flex-column align-items-center justify-content-center position-relative">
        <h1>How can we help?</h1>
        <div class="input-group mt-4" style="max-width: 600px">
            <input
                type="text"
                class="form-control"
                v-model="searchText"
                placeholder="Search the knowledge base"
                @input="handleInput" />
            <button class="btn btn-primary" @click="handleSearch">Search</button>
        </div>

        <!-- Menú de vista previa de búsqueda -->
        <div
            v-if="searchText.length > 0 && filteredResults.length > 0"
            class="position-absolute start-50 translate-middle-x bg-white border rounded-3 overflow-hidden shadow mt-2"
            style="width: 600px; top: 100%; z-index: 100">
            <router-link
                v-for="article in filteredResults"
                :key="article.id"
                :to="`/my-account/${article.id}`"
                class="dropdown-item d-flex align-items-start p-3 text-start text-decoration-none text-dark"
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

    .hero-section h1 {
        font-family: $font-family-title;
        font-weight: 400;
        color: $text-title;
    }

    .position-relative {
        position: relative;
    }

    .dropdown-item:hover,
    .dropdown-item:focus {
        background-color: $gray-lighter;
    }
</style>

<!--
Este es el componente principal que los usuarios ven al llegar a la página. Su función es:
Proporcionar la interfaz de búsqueda: Contiene el campo de texto y el botón de "Search".
Manejar la búsqueda instantánea: A medida que el usuario escribe, este componente filtra la lista de artículos y muestra una vista previa en un menú desplegable.
Redireccionar al hacer clic: Cuando el usuario hace clic en un resultado de la vista previa, redirige a la página del artículo correspondiente.
-->
