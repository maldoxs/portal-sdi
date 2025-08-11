<template>
    <div class="mt-5 mb-4">
        <h5 class="mb-3">Popular Articles</h5>
        <ul class="list-unstyled">
            <li v-for="article in popularArticles" :key="article.id" class="mb-2">
                <a href="#" class="text-decoration-none text-dark">{{ article.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    const popularArticles = ref([
        { id: 1, title: "How to Create an Account" },
        { id: 2, title: "How Does the 30 Day Money Back Guarantee Work?" },
        { id: 3, title: "How Our Pricing Plans Work" },
        { id: 4, title: "Best Practices for Account Security" },
        { id: 5, title: "How Can I Edit My Already Existing Page?" },
    ]);
</script>
