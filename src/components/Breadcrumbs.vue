<script setup>
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import { topics } from "../data/topics.js";

    const props = defineProps({
        // Si una vista te pasa su propio trail, lo usamos tal cual.
        items: { type: Array, default: null },
    });

    const route = useRoute();

    const slugify = (s) =>
        (s || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");

    /* Detecta la categoría actual para rutas de categoría o /my-account */
    const categorySlug = computed(() => {
        if (route.params?.categorySlug) return String(route.params.categorySlug);
        // Soporte para la ruta /my-account sin params
        if (route.name === "Account") return "my-account";
        // En otras rutas (Home, etc.) no añadimos segundo breadcrumb
        return "";
    });

    const categoryDisplay = computed(() => {
        if (!categorySlug.value) return null;
        const t = topics.find((x) => x.slug === categorySlug.value);
        // Si no encuentra la meta, no ponemos texto (evita "My Account" por defecto)
        return t?.display ?? null;
    });

    /* Trail final:
   - Si se pasó props.items, lo usamos tal cual.
   - Si estamos en categoría, mostramos esa categoría en español con enlace.
   - Si no, solo “Inicio”. */
    const trail = computed(() => {
        if (props.items && props.items.length) return props.items;

        if (categoryDisplay.value) {
            return [
                {
                    text: categoryDisplay.value,
                    to: { name: "Category", params: { categorySlug: categorySlug.value } },
                },
            ];
        }

        return []; // Solo mostrará "Inicio"
    });
</script>

<template>
    <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/">Inicio</router-link>
            </li>

            <li
                v-for="(i, idx) in trail"
                :key="idx"
                class="breadcrumb-item"
                :class="{ active: !i.to }"
                :aria-current="!i.to ? 'page' : null">
                <template v-if="i.to">
                    <router-link :to="i.to">{{ i.text }}</router-link>
                </template>
                <template v-else>
                    {{ i.text }}
                </template>
            </li>
        </ol>
    </nav>
</template>

<!--
Función: Crea un componente de "migas de pan" o ruta de navegación.

Lógica:
Puede recibir una propiedad (props.items) para una ruta personalizada.
Si no recibe props, infiere la ruta automáticamente a partir de los parámetros de la URL (useRoute) y busca el nombre de visualización en topics.js.
Construye la lista de enlaces (trail) que siempre comienza con "Inicio".
Dependencias: topics.js, Vue Router.
Observaciones: Es un componente fundamental para la navegación y la orientación del usuario, utilizado en casi todas las vistas de la aplicación.
-->
