<script setup>
    // Importaciones
    // Estas líneas traen las "herramientas" que necesitamos de Vue y otros archivos.
    // 'ref', 'computed', etc., son funciones de Vue para manejar datos reactivos y el ciclo de vida del componente.
    // 'useRoute' es para acceder a la URL, y los demás son nuestros datos locales.
    import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";
    import { useRoute } from "vue-router";
    import { articles } from "../data/articles.js";
    import { topics } from "../data/topics.js";
    import HeroSection from "../components/HeroSection.vue";

    // Variables de Estado (Estado Reactivo)
    // Son como el "cerebro" del componente. Su valor puede cambiar y la vista se actualiza.
    const route = useRoute();
    const activeHeadingId = ref(""); // Guarda el ID del título activo en el TOC para resaltarlo.
    const headings = ref([]); // Un array que contendrá los títulos del artículo.
    const needsPadding = ref(false); // 🆕 ¡Esta es la clave del "efecto colchón"! Es un interruptor que se vuelve `true` si el artículo es corto.

    // Propiedades Calculadas (Computed Properties)
    // Estas variables se actualizan automáticamente cuando cambian sus dependencias. Son muy eficientes.
    const article = computed(() => {
        const articleId = route.params.articleId;
        // Busca el artículo por su ID. Si no lo encuentra, devuelve un objeto vacío para evitar errores.
        return articles.find((a) => a.id === articleId) || {};
    });
    const categoryDisplay = computed(() => {
        const t = topics.find((x) => x.slug === article.value.category);
        return t?.display || article.value.category;
    });
    const categorySlug = computed(() => {
        return article.value.category || "general";
    });

    // Funciones Principales
    // Lógica para manejar la página.
    const extractHeadings = () => {
        // Crea un <div> temporal para procesar el HTML sin afectar la página real.
        const tempEl = document.createElement("div");
        tempEl.innerHTML = article.value.content;
        const headingElements = tempEl.querySelectorAll("h2, h3, h4, h5, h6"); // Encuentra todos los títulos.
        // Mapea los títulos encontrados a un array con su ID y texto.
        headings.value = Array.from(headingElements).map((el) => {
            const id = el.innerText
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
            el.id = id; // Asigna el ID al elemento real en el <div> temporal.
            return { id, text: el.innerText };
        });
        // Inyecta el HTML procesado (con los IDs) en el div final del artículo.
        document.querySelector(".article-content").innerHTML = tempEl.innerHTML;
        if (headings.value.length > 0) {
            activeHeadingId.value = headings.value[0].id; // Resalta el primer título por defecto.
        }
    };
    const handleScroll = () => {
        const headingElements = document.querySelectorAll(
            ".article-content h2, .article-content h3, .article-content h4, .article-content h5, .article-content h6"
        );
        if (headingElements.length === 0) return;
        const isAtBottom =
            window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
        if (isAtBottom) {
            activeHeadingId.value = headings.value[headings.value.length - 1].id; // Si el usuario llega al final, resalta el último título.
            return;
        }
        let currentActiveId = activeHeadingId.value;
        for (let i = 0; i < headingElements.length; i++) {
            const el = headingElements[i];
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100) currentActiveId = el.id;
            // Si el título está cerca de la parte superior, lo marca como activo.
            else break;
        }
        activeHeadingId.value = currentActiveId;
    };
    const scrollToHeading = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" }); // Desplaza la vista de forma suave.
    };
    // 🆕 La función que chequea si el "colchón" es necesario.
    const checkContentHeight = () => {
        const contentContainer = document.querySelector(".col-lg-8");
        if (!contentContainer) {
            return;
        }
        const contentHeight = contentContainer.scrollHeight; // Altura total del contenido.
        const viewportHeight = window.innerHeight; // Altura de la ventana visible.

        needsPadding.value = contentHeight < viewportHeight; // El interruptor se enciende si el contenido es más corto que la ventana.
    };

    // Ciclo de Vida del Componente
    // Estas funciones se activan en momentos clave del ciclo de vida de Vue.
    // 'watch' reacciona a cambios en los datos.
    watch(article, () => {
        if (article.value.content) {
            extractHeadings();
            // 🆕 'nextTick' espera a que Vue termine de actualizar el DOM. Es vital para que las mediciones de altura sean correctas.
            nextTick(() => {
                checkContentHeight(); // Chequea la altura después de que el contenido se ha inyectado.
                window.addEventListener("scroll", handleScroll); // Agrega el 'listener' del scroll.
                handleScroll();
            });
        }
    });
    // 'onMounted' se ejecuta una vez cuando el componente se carga por primera vez.
    onMounted(() => {
        if (article.value.content) {
            extractHeadings();
            nextTick(() => {
                checkContentHeight();
                window.addEventListener("scroll", handleScroll);
                handleScroll();
            });
        }
    });
    // 'onUnmounted' limpia los 'listeners' para evitar problemas de memoria.
    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });
</script>

<template>
    <HeroSection
        id="article-hero"
        :showTitle="false"
        attachResultsTo="input"
        class="kb-hero-compact hero--article">
        <template #presearch>
            <nav aria-label="breadcrumb" class="mb-0">
                <ol class="breadcrumb kb-bc-white">
                    <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Category', params: { categorySlug } }">
                            {{ categoryDisplay }}
                        </router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        {{ article.title }}
                    </li>
                </ol>
            </nav>
        </template>
    </HeroSection>

    <div class="container my-5" v-if="article.content">
        <div class="row">
            <div class="col-lg-8">
                <h2 class="mb-4">{{ article.title }}</h2>
                <div class="article-content" :class="{ 'padded-content': needsPadding }"></div>
            </div>

            <div class="col-lg-4 d-none d-lg-block">
                <div class="card p-4 mb-4 toc-card sticky-top">
                    <h5 class="card-title">Contenido</h5>
                    <nav class="nav nav-pills flex-column">
                        <a
                            v-for="heading in headings"
                            :key="heading.id"
                            :href="`#${heading.id}`"
                            class="nav-link"
                            :class="{ active: activeHeadingId === heading.id }"
                            @click.prevent="scrollToHeading(heading.id)">
                            {{ heading.text }}
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .kb-hero-compact :deep(.container) {
        max-width: 100%;
    }

    .kb-hero-compact :deep(.kb-hero-bar) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1440px;
        padding: 0 76px;
        margin: 0 auto;
        gap: 20px;
    }

    .kb-hero-compact :deep(.kb-search) {
        position: relative;
        width: clamp(360px, 36vw, 560px);
        margin-left: auto;
    }
    .kb-hero-compact :deep(.kb-search-input) {
        height: 48px;
    }

    .kb-hero-compact :deep(.kb-search > .kb-search-results) {
        left: 0;
        right: 0;
        transform: none;
        width: 100%;
        max-width: none;
        z-index: 1000;
    }

    .kb-bc-white {
        margin: 0;
        line-height: 1.1;
    }
    .kb-bc-white,
    .kb-bc-white .breadcrumb-item,
    .kb-bc-white .breadcrumb-item a,
    .kb-bc-white .breadcrumb-item.active {
        color: #fff !important;
    }
    .kb-bc-white .breadcrumb-item + .breadcrumb-item::before {
        color: #fff !important;
        opacity: 0.85;
    }

    @media (max-width: 992px) {
        .kb-hero-compact :deep(.kb-hero-bar) {
            flex-direction: column;
            align-items: stretch;
            padding: 0 24px;
            gap: 12px;
        }
        .kb-hero-compact :deep(.kb-search) {
            width: 100%;
            margin-left: 0;
        }
        .kb-hero-compact :deep(.kb-search > .kb-search-results) {
            left: 0;
            right: 0;
            width: 100%;
            max-width: none;
        }
    }
    @media (max-width: 576px) {
        .kb-hero-compact :deep(.kb-hero-bar) {
            padding: 0 16px;
        }
    }

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
        color: #fff;
        font-weight: bold;
        border-radius: 0.25rem;
    }
    .nav-link:hover,
    .nav-link:focus {
        background-color: transparent;
        color: #555;
    }
    .nav-link.active:hover,
    .nav-link.active:focus {
        background-color: #295ba7;
        color: #fff;
        font-weight: bold;
    }

    #article-hero {
        padding: 1.5rem !important;
    }

    .kb-hero-compact :deep(.kb-search) {
        position: relative;
        z-index: 2001;
    }
    .kb-hero-compact :deep(.kb-search-results) {
        z-index: 2100;
    }

    .padded-content {
        padding-bottom: 35vh;
    }
</style>
