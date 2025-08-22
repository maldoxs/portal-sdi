# 📘 Portal de Conocimiento – SII

## 📌 Propósito
Portal web interno para documentar aplicaciones y procesos del SII, eliminando la dependencia de PDFs/Word.
Permite **buscar, navegar y leer artículos** organizados por categorías en un entorno web.

Construido con:
- Vue 3 (Composition API)
- Vue Router
- Bootstrap 5
- Archivos de datos locales (`topics.js`, `articles.js`)

---

## 🗂️ Estructura de datos

### Topics (`topics.js`)
- `slug`: identificador único
- `title` / `display`: nombre mostrado
- `description`: breve resumen
- Relación: **1 Topic → N Articles**

### Articles (`articles.js`)
- `id`: identificador único
- `title`: título del artículo
- `excerpt`: resumen
- `content`: contenido HTML
- `category`: slug de la categoría

---

## 🧭 Rutas principales
- `/` → **Home** (categorías + populares + soporte)
- `/category/:categorySlug` → **Vista de categoría**
- `/my-account/:id` → **Detalle de artículo**

---

## 🧩 Componentes principales

### HeroSection
- Barra azul superior con buscador.
- Props:
  - `showTitle` → muestra/oculta el título grande.
  - `attachResultsTo` → `"center"` (Home) o `"input"` (Categoría).
- Slots:
  - `presearch` → para **Breadcrumbs**.

### Breadcrumbs
- Variante `inverted` → texto blanco sobre el hero.
- En Categoría: aparecen a la **izquierda** del buscador.

### ArticleList
- Lista artículos de una categoría.
- Props:
  - `articlesToDisplay`
  - `categorySlug`

### Sidebar de Categorías
- Lista de categorías con conteo dinámico.
- Categoría activa resaltada.

---

## 🔍 Motor de búsqueda
1. Normaliza texto (minúsculas, sin tildes).
2. Elimina HTML y stopwords ES.
3. Estrategias de match:
   - **Frase exacta** (peso alto).
   - **Proximidad de tokens**.
   - **Tokens múltiples coincidentes**.
4. Campos ponderados:
   - Título (5)
   - Categoría (3)
   - Extracto (2)
   - Contenido (1)
5. Resultados con `<mark>` en tokens.

---

## 🎨 Estilos / UX

- **Categoría**:
  - Breadcrumbs a la izquierda, buscador a la derecha.
  - Input con ancho controlado `clamp(360px, 36vw, 560px)`.
  - Dropdown mismo ancho que el input.
- **Home**:
  - Buscador centrado, ancho `min(860px, 92vw)`.
  - Dropdown centrado y amplio.
- **Accesibilidad**:
  - Roles `search`, `listbox`, `option`.
  - Botón clear con `aria-label`.
- **Fixes aplicados**:
  - Ocultar doble “X” en input search.
  - Separación uniforme del dropdown `8px`.
  - `min-width: 0` en contenedores para evitar truncamientos.

---

## 📱 Responsividad
- ≥992px → breadcrumbs izq + input der.
- ≤992px → columna (breadcrumbs arriba, input abajo).
- ≤576px → padding reducido, input full-width.

---

## ✅ Checklist
- [ ] Props obligatorias pasadas a componentes (`ArticleList`).
- [ ] Dropdown nunca sobrepasa ancho del input en Categoría.
- [ ] Breadcrumbs blancos y alineados a la izquierda.
- [ ] Sin warnings en consola.
- [ ] Textos en dropdown no se ocultan.
- [ ] En móvil: input y dropdown 100%.

---

## 🚀 Mejoras futuras
- API/worker para búsquedas más grandes.
- Analytics de búsquedas sin resultados.
- Sugerencias por categoría.
- Control de roles/edición colaborativa.
- Exportar a PDF/Excel artículos seleccionados.

---

## 👨‍💻 Equipo
- **Frontend**: Vue 3 + Router + Bootstrap 5
- **Desarrollo**: Angelo Maldonado (SII)
- **UX/UI**: Guía de usabilidad institucional aplicada

---

© Servicio de Impuestos Internos – Subdirección de TI
