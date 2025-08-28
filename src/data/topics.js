// src/data/topics.js
export const topics = [
    {
        slug: "my-account",
        title: "Mi Cuenta",
        display: "Grupo Empresariales",
        description:
            "Un grupo empresarial es un conjunto de empresas que están vinculadas entre sí mediante relaciones de propiedad, control o gestión común.",
        icon: "bi bi-share",
        order: 1,
    },
    {
        slug: "taf-resoluciones",
        title: "Primeros pasos",
        display: "Taf-Resoluciones",
        description:
            "Se conecta con SGF y otros sistemas (como SIAG y E-Folder) para centralizar, consultar y dar seguimiento a las resoluciones administrativas dentro del proceso de fiscalización.",
        icon: "bi bi-rocket",
        order: 2,
    },
    {
        slug: "billing-and-payments",
        title: "Facturación y pagos",
        display: "Facturación y pagos",
        description: "Información sobre cómo cobramos por nuestros servicios.",
        icon: "bi bi-receipt",
        order: 3,
    },
    {
        slug: "mobile-app",
        title: "Aplicación móvil",
        display: "Aplicación móvil",
        description: "Documentación y resolución de problemas de la aplicación móvil.",
        icon: "bi bi-phone",
        order: 4,
    },
    {
        slug: "copyright-and-legal",
        title: "Derechos de autor y aspectos legales",
        display: "Derechos de autor y aspectos legales",
        description: "Información importante sobre cómo manejamos su privacidad y datos.",
        icon: "bi bi-c-circle",
        order: 5,
    },
    {
        slug: "developers",
        title: "Desarrolladores",
        display: "Desarrolladores",
        description: "Documentación e integración para desarrolladores.",
        icon: "bi bi-code-slash",
        order: 6,
    },
];
/*

Función: Almacena los datos de las categorías de la base de conocimientos.

Lógica: Exporta un array de objetos, donde cada uno contiene la información de una categoría (slug, display, description, icon, order).
Dependencias: Ninguna.
Observaciones: Proporciona la estructura y el contenido para los temas de ayuda y la navegación.

 */
