# 📘 Portal de Información - Vue 3 + Composition API + Bootstrap 5

Este proyecto es un **portal de información y documentación interna**, diseñado para centralizar artículos, guías y datos técnicos sobre aplicaciones como **TAF-Resoluciones**, **Grupo Empresariales**, entre otras.
La idea es reemplazar documentos dispersos (Word/PDF) y tener un sitio **autogestionable, modular y escalable**.

---

## 🚀 Tecnologías principales
- **Vue 3** con **Composition API**
- **Vue Router** (SPA con rutas dinámicas)
- **Bootstrap 5** + **Bootstrap Icons**
- **SCSS** modular (variables, mixins, temas)
- Estructura de datos en **JS + HTML embebido**

---

## 📂 Estructura del Proyecto

```bash
📦 portal
 ┣ 📂 src
 ┃ ┣ 📂 assets
 ┃ ┃ ┗ style.css                # Estilos globales simples
 ┃ ┣ 📂 components              # Componentes reutilizables
 ┃ ┃ ┣ ArticleList.vue          # Listado de artículos
 ┃ ┃ ┣ Breadcrumbs.vue          # Migas de pan de navegación
 ┃ ┃ ┣ Footer.vue               # Pie de página
 ┃ ┃ ┣ Header.vue               # Encabezado / menú principal
 ┃ ┃ ┣ HelpTopics.vue           # Módulo de temas de ayuda
 ┃ ┃ ┣ HeroSection.vue          # Sección hero con buscador
 ┃ ┃ ┗ PopularArticles.vue      # Listado de artículos populares
 ┃ ┣ 📂 contents                # Contenidos específicos (HTML embebido)
 ┃ ┃ ┗ 📂 taf-resoluciones
 ┃ ┃    ┣ ambientesBd.js        # Ambientes de BD (Dev, Cert, Prod)
 ┃ ┃    ┣ jirasAsociados.js     # Jiras asociados al proyecto
 ┃ ┃    ┣ modeloDatos.js        # Modelo de datos SGFTR
 ┃ ┃    ┣ repositorioGit.js     # Repositorios Git vinculados
 ┃ ┃    ┗ requerimiento.js      # Requerimiento funcional
 ┃ ┣ 📂 data
 ┃ ┃ ┣ articles.js              # Listado de artículos (id, título, excerpt, content)
 ┃ ┃ ┗ topics.js                # Definición de categorías (slug, título, descripción)
 ┃ ┣ 📂 router
 ┃ ┃ ┗ index.js                 # Configuración de rutas Vue Router
 ┃ ┣ 📂 styles
 ┃ ┃ ┣ _mixins.scss             # Mixins SCSS reutilizables
 ┃ ┃ ┣ _kb-theme.scss           # Definición de tema base
 ┃ ┃ ┣ _variables.scss          # Variables de colores, tamaños, tipografía
 ┃ ┃ ┗ main.scss                # Punto de entrada de estilos SCSS
 ┃ ┣ 📂 views                   # Vistas principales
 ┃ ┃ ┣ Account.vue              # Vista de categoría "Mi Cuenta"
 ┃ ┃ ┣ Article.vue              # Vista de detalle de artículo
 ┃ ┃ ┣ Category.vue             # Vista de categoría (dinámica)
 ┃ ┃ ┗ Home.vue                 # Página de inicio con Hero + Temas
 ┃ ┣ App.vue                    # Root component de la SPA
 ┃ ┣ main.js                    # Punto de entrada, crea app Vue y monta router
 ┗ package.json
