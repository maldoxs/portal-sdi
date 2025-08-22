<script setup>
    import { defineProps, computed } from "vue";
    import { useRoute } from "vue-router";

    const props = defineProps({
        /** "default" | "inverted" (blanco) */
        variant: { type: String, default: "default" },
    });

    const route = useRoute();

    const rootClass = computed(() => [
        "breadcrumbs",
        props.variant === "inverted" ? "breadcrumbs--inverted" : null,
    ]);

    // Si ya tienes tu propia generación de items, conserva la tuya.
    // Aquí va un ejemplo sencillo:
    const items = computed(() => {
        const arr = [{ label: "Inicio", to: "/" }];
        if (route.name === "Category" || route.name === "Account") {
            // Título genérico; si necesitas el display exacto, pásalo por prop.
            arr.push({ label: "Grupo Empresariales", to: null });
        }
        return arr;
    });
</script>

<template>
    <nav :class="rootClass" aria-label="breadcrumb">
        <ol class="breadcrumb m-0">
            <li
                v-for="(it, i) in items"
                :key="i"
                class="breadcrumb-item"
                :class="{ active: !it.to }"
                :aria-current="!it.to ? 'page' : null">
                <router-link v-if="it.to" :to="it.to">{{ it.label }}</router-link>
                <span v-else>{{ it.label }}</span>
            </li>
        </ol>
    </nav>
</template>

<style scoped>
    /* Variante invertida (blanco) solo cuando lo pidas */
    .breadcrumbs--inverted,
    .breadcrumbs--inverted a {
        color: #fff !important;
    }

    /* separador */
    .breadcrumbs--inverted .breadcrumb-item + .breadcrumb-item::before {
        color: rgba(255, 255, 255, 0.85) !important;
    }

    /* Asegura blanco también en el item activo */
    .breadcrumbs--inverted .breadcrumb-item.active,
    .breadcrumbs--inverted .breadcrumb-item.active > span {
        color: #fff !important;
    }

    /* Reseteo suave */
    .breadcrumb {
        background: transparent;
        margin: 0;
    }
</style>

<!--
Función: Crea un componente de "migas de pan" o ruta de navegación.

Lógica:
Puede recibir una propiedad (props.items) para una ruta personalizada.
Si no recibe props, infiere la ruta automáticamente a partir de los parámetros de la URL (useRoute) y busca el nombre de visualización en topics.js.
Construye la lista de enlaces (trail) que siempre comienza con "Inicio".
Dependencias: topics.js, Vue Router.
Observaciones: Es un componente fundamental para la navegación y la orientación del usuario, utilizado en casi todas las vistas de la aplicación.
-->
