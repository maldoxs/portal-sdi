<template>
    <div class="row">
        <h2 class="mb-4">Help Topics</h2>
        <div v-for="topic in helpTopics" :key="topic.id" class="col-md-6 mb-4">
            <router-link :to="topic.link" class="card h-100 p-3 text-decoration-none text-dark">
                <i :class="topic.iconClass" class="fs-1 text-primary"></i>
                <h5 class="mt-2">{{ topic.title }}</h5>
                <p class="text-muted">{{ topic.description }}</p>
            </router-link>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    const helpTopics = ref([
        {
            id: 1,
            title: "My Account",
            description: "How to manage your account and its features.",
            iconClass: "bi bi-person",
            link: "/my-account",
        },
        {
            id: 2,
            title: "Getting Started",
            description: "Articles to get you up and running quickly and easily.",
            iconClass: "bi bi-rocket",
            link: "/",
        },
        {
            id: 3,
            title: "Billing & Payments",
            description: "Information about how we charge you for our services.",
            iconClass: "bi bi-credit-card",
            link: "/",
        },
        {
            id: 4,
            title: "Mobile App",
            description: "Documentation and troubleshooting our mobile app.",
            iconClass: "bi bi-phone",
            link: "/",
        },
        {
            id: 5,
            title: "Copyright & Legal",
            description: "Important information about how we handle your privacy and data.",
            iconClass: "bi bi-lightbulb",
            link: "/",
        },
        {
            id: 6,
            title: "Developers",
            description: "Developer documentation and integration features.",
            iconClass: "bi bi-code",
            link: "/",
        },
    ]);
</script>
