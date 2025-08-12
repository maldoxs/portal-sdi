<template>
    <div class="row">
        <h2 class="mb-4 kb-category-subtitulo">Temas de ayuda</h2>

        <div v-for="topic in helpTopics" :key="topic.slug" class="col-md-6 mb-4">
            <RouterLink
                :to="{ name: 'Category', params: { categorySlug: topic.slug } }"
                class="card h-100 p-3 text-decoration-none text-dark">
                <i :class="topic.icon" class="fs-1 kb-color"></i>
                <h5 class="mt-2 kb-category-title">{{ topic.display }}</h5>
                <p class="kb-category-desc text-muted mb-0">{{ topic.description }}</p>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
    import { computed } from "vue";
    import { topics } from "../data/topics.js";

    const helpTopics = computed(() =>
        [...topics].sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    );
</script>
