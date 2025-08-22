<script setup>
    import { ref, watch, defineProps } from "vue";
    import { useRouter } from "vue-router";
    import { articles } from "../data/articles.js";
    import { topics } from "../data/topics.js";
    import { STOPWORDS_ES } from "../utils/stopwords-es.js";

    const props = defineProps({
        showTitle: { type: Boolean, default: true },
        /** 'center' (comportamiento original) | 'input' (adjuntar al buscador) */
        attachResultsTo: { type: String, default: "center" },
    });

    const searchText = ref("");
    const filteredResults = ref([]);
    const router = useRouter();
    const isLoading = ref(false);

    /* ===== Utilidades ===== */
    const norm = (s = "") =>
        String(s || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

    const stripHtml = (html = "") =>
        String(html || "")
            .replace(/<script[\s\S]*?<\/script>/gi, " ")
            .replace(/<style[\s\S]*?<\/style>/gi, " ")
            .replace(/<[^>]+>/g, " ")
            .replace(/&nbsp;|&amp;|&lt;|&gt;|&quot;|&#39;/g, " ")
            .replace(/\s+/g, " ")
            .trim();

    const meaningfulTokens = (qNorm) =>
        qNorm
            .split(/\s+/)
            .map((t) => t.trim())
            .filter((t) => t && !STOPWORDS_ES.has(t) && t.length >= 3);

    function findFlexiblePhrase(hayNorm, tokens, maxGap = 60) {
        if (!tokens.length) return null;
        let pos = 0,
            start = -1,
            end = -1;
        for (const tk of tokens) {
            const p = hayNorm.indexOf(tk, pos);
            if (p === -1) return null;
            if (start === -1) start = p;
            if (pos && p - pos > maxGap) return null;
            pos = p + tk.length;
            end = pos;
        }
        return { start, end };
    }

    function makeWindow(text, start, end, pad = 120) {
        const s = Math.max(0, start - Math.floor(pad / 2));
        const e = Math.min(text.length, end + Math.floor(pad / 2));
        let win = text.slice(s, e).trim();
        if (s > 0) win = "… " + win;
        if (e < text.length) win = win + " …";
        return win;
    }

    function escapeHtml(s) {
        return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function highlight(text, tokens) {
        if (!tokens.length) return escapeHtml(text);
        const ts = [...tokens].sort((a, b) => b.length - a.length);
        let out = "";
        const parts = text.split(/(\s+)/);
        for (let i = 0; i < parts.length; i++) {
            const chunk = parts[i];
            if (/^\s+$/.test(chunk)) {
                out += chunk;
                continue;
            }
            const n = norm(chunk);
            const hit = ts.find((tk) => {
                const idx = n.indexOf(tk);
                if (idx === -1) return false;
                const prev = idx === 0 ? "" : n[idx - 1];
                const next = idx + tk.length >= n.length ? "" : n[idx + tk.length];
                const isWordBoundaryPrev = !prev || /[^a-z0-9áéíóúñ]/i.test(prev);
                const isWordBoundaryNext = !next || /[^a-z0-9áéíóúñ]/i.test(next);
                return isWordBoundaryPrev && isWordBoundaryNext;
            });
            out += hit ? `<mark>${escapeHtml(chunk)}</mark>` : escapeHtml(chunk);
        }
        return out;
    }

    const findTopicForArticle = (a) => {
        const cat = norm(a.category || "");
        return (
            topics.find((t) => norm(t.slug) === cat) ||
            topics.find((t) => norm(t.display || t.title || t.slug) === cat) ||
            null
        );
    };

    const handleInput = async () => {
        isLoading.value = true;
        await new Promise((r) => setTimeout(r, 300));
        const raw = String(searchText.value || "").trim();
        const qNorm = norm(raw);
        if (!qNorm) {
            filteredResults.value = [];
            isLoading.value = false;
            return;
        }

        const tokens = meaningfulTokens(qNorm);
        const hasMeaningful = tokens.length > 0;

        const results = [];
        for (const a of articles) {
            const topic = findTopicForArticle(a);
            const title = a.title || "";
            const excerpt = a.excerpt || "";
            const contentText = stripHtml(a.content || "");
            const categoryDisplay =
                (topic && (topic.display || topic.title || topic.slug)) || a.category || "";

            const fields = [
                { key: "Título", text: title, weight: 5 },
                { key: "Categoría", text: categoryDisplay, weight: 3 },
                { key: "Extracto", text: excerpt, weight: 2 },
                { key: "Contenido", text: contentText, weight: 1 },
            ];

            let best = null;
            for (const f of fields) {
                const text = f.text || "";
                if (!text) continue;
                const textNorm = norm(text);
                let score = 0,
                    where = f.key;
                let start = textNorm.indexOf(qNorm);
                if (start !== -1) {
                    const end = start + qNorm.length;
                    score = 100 * f.weight;
                    const window = makeWindow(text, start, end);
                    best = { score, where, snippet: window, source: f.key };
                    break;
                }
                if (hasMeaningful) {
                    const hit = findFlexiblePhrase(textNorm, tokens, 60);
                    if (hit) {
                        const span = hit.end - hit.start;
                        score = 80 * f.weight + Math.max(0, 40 - span / 5);
                        const window = makeWindow(text, hit.start, hit.end);
                        if (!best || score > best.score)
                            best = { score, where, snippet: window, source: f.key };
                        continue;
                    }
                }
                if (hasMeaningful) {
                    let tokenScore = 0,
                        matches = 0;
                    for (const tk of tokens) {
                        if (textNorm.includes(tk)) {
                            tokenScore += f.weight;
                            matches++;
                        }
                    }
                    if (matches >= 2) {
                        score = 20 * f.weight + tokenScore;
                        const firstPos = tokens
                            .map((tk) => textNorm.indexOf(tk))
                            .filter((p) => p !== -1)
                            .sort((a, b) => a - b)[0];
                        const window = makeWindow(text, firstPos, firstPos + tokens[0].length);
                        if (!best || score > best.score)
                            best = { score, where, snippet: window, source: f.key };
                    }
                }
            }
            if (best) {
                const snippetHtml = highlight(best.snippet, tokens);
                results.push({
                    id: a.id,
                    title: a.title,
                    to: `/my-account/${a.id}`,
                    snippetHtml,
                    whereLabel: `Coincide en: ${best.where}`,
                    score: best.score,
                });
            }
        }
        results.sort((a, b) => b.score - a.score);
        filteredResults.value = results.slice(0, 12);
        setTimeout(() => {
            isLoading.value = false;
        }, 500);
    };

    const clearSearch = () => {
        searchText.value = "";
    };

    watch(searchText, (v) => {
        if (v.length > 0) handleInput();
        else filteredResults.value = [];
    });
</script>

<template>
    <div
        class="hero-section p-5 d-flex flex-column align-items-center justify-content-center position-relative color">
        <h1 v-if="showTitle" class="kb-category-title-buscador text-white">
            ¿Cómo puedo ayudarte?
        </h1>

        <div class="kb-hero-bar">
            <slot name="presearch" />

            <form class="kb-search" role="search" @submit.prevent>
                <i v-if="!searchText" class="bi bi-search kb-search-icon" aria-hidden="true"></i>
                <input
                    type="text"
                    class="form-control kb-search-input"
                    v-model="searchText"
                    placeholder="Buscar en la base de conocimientos..."
                    aria-label="Buscar en la base de conocimientos" />
                <button
                    v-if="searchText"
                    type="button"
                    class="kb-clear-btn"
                    @click="clearSearch"
                    aria-label="Borrar búsqueda">
                    <i class="bi bi-x"></i>
                </button>
                <div v-if="isLoading" class="kb-loader"></div>

                <!-- ✅ ÚNICO dropdown (dentro del form) -->
                <div
                    v-if="searchText.length > 0 && !isLoading"
                    :class="[
                        'kb-search-results',
                        attachResultsTo === 'input'
                            ? 'kb-search-results--attached'
                            : 'kb-search-results--centered',
                    ]"
                    role="listbox">
                    <template v-if="filteredResults.length > 0">
                        <router-link
                            v-for="r in filteredResults"
                            :key="r.id"
                            :to="r.to"
                            class="dropdown-item d-flex align-items-start p-3 text-start text-decoration-none text-dark"
                            role="option"
                            @click="clearSearch">
                            <i class="bi bi-file-earmark-text text-muted me-3 mt-1"></i>
                            <div>
                                <strong class="d-block">{{ r.title }}</strong>
                                <small class="text-muted d-block mb-1">{{ r.whereLabel }}</small>
                                <p class="text-muted mb-0" v-html="r.snippetHtml"></p>
                            </div>
                        </router-link>
                    </template>
                    <div v-else class="p-4 text-center text-muted">
                        <p class="mb-0">No hay resultados para "{{ searchText }}"</p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use "../styles/variables" as *;
    @use "../styles/mixins" as *; // ajusta la ruta

    .color {
        background-color: #0064a0;
    }
    .hero-section h1 {
        font-family: $font-family-body;
        font-weight: 400;
        color: white;
    }

    /* Barra que agrupa breadcrumbs + form */
    .kb-hero-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 16px;
    }

    /* ===== Buscador tipo pill ===== */
    .kb-search {
        position: relative;
        width: min(860px, 92vw);
    }
    .kb-search-input {
        height: 56px;
        border-radius: 9999px;
        border: none;
        padding-left: 56px;
        padding-right: 90px;
        font-size: 16px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    }
    .kb-search-icon {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 22px;
        color: #111;
        pointer-events: none;
    }
    .kb-clear-btn {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        color: #9aa3af;
        font-size: 20px;
    }
    .kb-loader {
        position: absolute;
        right: 45px;
        top: 50%;
        transform: translateY(-50%);
        width: 25px;
        height: 25px;
        border: 2px solid rgba(0, 0, 0, 0.1);
        border-top-color: $primary-blue;
        border-radius: 50%;
        animation: spin 1.2s linear infinite;
    }
    @keyframes spin {
        to {
            transform: translateY(-50%) rotate(360deg);
        }
    }

    /* === Dropdown: estilos comunes (misma separación) === */
    .kb-search-results {
        position: absolute;
        top: calc(100% + 8px); /* separación estándar */
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        overflow: auto;
        max-height: 360px;
        box-shadow: 0 8px 24px rgba(16, 24, 40, 0.12);
        z-index: 100;
    }

    /* Home (centrado, ancho grande) */
    .kb-search-results--centered {
        left: 50%;
        transform: translateX(-50%);
        width: min(860px, 92vw);
    }

    /* Categoría (ancho exacto del input) */
    .kb-search-results--attached {
        left: 0;
        right: 0;
        transform: none;
        width: 100%;
        max-width: none;
    }

    /* Oculta el botón nativo de limpiar (dejamos solo la X custom) */
    .kb-search-input::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
        display: none;
    }
    .kb-search-input::-ms-clear {
        display: none;
        width: 0;
        height: 0;
    }

    /* === Fix: evitar corte del texto en resultados (flex shrink + wrapping) === */
    .kb-search-results .dropdown-item {
        display: flex; /* por si algún estilo externo lo cambia */
        align-items: flex-start;
        gap: 12px;
        padding-right: 16px; /* opcional: aire a la derecha */
    }

    .kb-search-results .dropdown-item > i {
        flex: 0 0 auto;
    }

    .kb-search-results .dropdown-item > div {
        flex: 1 1 auto;
        min-width: 0; /* 👈 permite encoger y envolver el texto */
    }

    /* Forzar que el snippet se parta correctamente */
    .kb-search-results .dropdown-item p {
        white-space: normal;
        overflow-wrap: anywhere; /* o "break-word" si prefieres */
        word-break: break-word;
    }
</style>

<!--
Función: Contiene la sección principal de la página de inicio, con un buscador global.

Lógica:
Implementa una lógica de búsqueda muy completa: normaliza el texto de búsqueda, elimina stopwords, busca coincidencias en varios campos (título, categoría, contenido) y asigna un puntaje de relevancia.
Genera un snippet (fragmento de texto) que resalta la coincidencia, facilitando la identificación de los resultados.
Muestra los resultados en un menú desplegable con enlaces a las páginas de los artículos.
Dependencias: articles.js, topics.js, stopwords-es.js, Vue Router.
Observaciones: Es uno de los componentes más complejos y el corazón de la funcionalidad de búsqueda de la aplicación.

-->
