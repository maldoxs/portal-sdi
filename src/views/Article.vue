<template>
    <div class="container my-5">
        <!-- ✅ Breadcrumb dinámico -->
        <nav aria-label="breadcrumb" class="mb-4">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
                <li class="breadcrumb-item">
                    <router-link :to="{ name: 'Category', params: { categorySlug } }">
                        {{ categoryDisplay }}
                    </router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{ article.title }}</li>
            </ol>
        </nav>

        <div class="row">
            <!-- Contenido del artículo -->
            <div class="col-lg-8">
                <h2 class="mb-4">{{ article.title }}</h2>
                <div class="article-content" v-html="article.content"></div>
            </div>

            <!-- Menú lateral -->
            <div class="col-lg-4 d-none d-lg-block">
                <div class="card p-4 mb-4 sticky-top" style="top: 20px">
                    <h5 class="card-title">Contenido</h5>
                    <nav class="nav nav-pills flex-column">
                        <a
                            v-for="heading in headings"
                            :key="heading.id"
                            :href="`#${heading.id}`"
                            class="nav-link"
                            :class="{ active: activeHeadingId === heading.id }"
                            @click.prevent="scrollToHeading(heading.id)"
                            >{{ heading.text }}</a
                        >
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";
    import { useRoute } from "vue-router";
    import { articles } from "../data/articles.js";
    import { topics } from "../data/topics.js";

    const route = useRoute();
    const activeHeadingId = ref("");
    const headings = ref([]);

    /* Artículo actual por ID */
    const article = computed(() => {
        const articleId = route.params.articleId;
        return articles.find((a) => a.id === articleId) || {};
    });

    /* slug/category y nombre visible para el breadcrumb */
    const slugify = (s) =>
        (s || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");

    const categorySlug = computed(() => slugify(article.value.category || "my-account"));
    const categoryDisplay = computed(() => {
        const t = topics.find((x) => x.slug === categorySlug.value);
        return t?.display || article.value.category || "Mi Cuenta";
    });

    /* Extrae los títulos del contenido del artículo */
    const extractHeadings = () => {
        const tempEl = document.createElement("div");
        tempEl.innerHTML = article.value.content;

        const headingElements = tempEl.querySelectorAll("h2, h3, h4, h5, h6");

        headings.value = Array.from(headingElements).map((el) => {
            const id = el.innerText
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
            el.id = id;
            return { id, text: el.innerText };
        });

        document.querySelector(".article-content").innerHTML = tempEl.innerHTML;

        if (headings.value.length > 0) {
            activeHeadingId.value = headings.value[0].id;
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
            activeHeadingId.value = headings.value[headings.value.length - 1].id;
            return;
        }

        let currentActiveId = activeHeadingId.value;
        for (let i = 0; i < headingElements.length; i++) {
            const el = headingElements[i];
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100) currentActiveId = el.id;
            else break;
        }
        activeHeadingId.value = currentActiveId;
    };

    const scrollToHeading = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    watch(article, () => {
        if (article.value.content) {
            extractHeadings();
            nextTick(() => {
                window.addEventListener("scroll", handleScroll);
                handleScroll();
            });
        }
    });

    onMounted(() => {
        if (article.value.content) {
            extractHeadings();
            nextTick(() => {
                window.addEventListener("scroll", handleScroll);
                handleScroll();
            });
        }
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });
</script>

<style scoped>
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
