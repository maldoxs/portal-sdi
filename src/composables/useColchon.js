// src/composables/useColchon.js
import { onMounted, onBeforeUnmount } from "vue";

export function useColchon(elRef, options = {}) {
    const vh = options.vh ?? 35; // altura del colchón en vh
    const safety = options.safety ?? 0; // factor de seguridad (0..0.2) opcional

    let ro = null; // ResizeObserver
    let onResize = null;

    const apply = () => {
        const el = elRef?.value;
        if (!el) return;

        // Medimos contenido vs viewport (ajustado por safety)
        const viewport = window.innerHeight * (1 - safety);
        const content = el.scrollHeight;

        if (content < viewport) {
            el.classList.add("with-colchon");
            el.style.setProperty("--colchon-vh", `${vh}vh`);
        } else {
            el.classList.remove("with-colchon");
            el.style.removeProperty("--colchon-vh");
        }
    };

    onMounted(() => {
        // 1) Observa cambios de tamaño del contenedor
        if ("ResizeObserver" in window) {
            ro = new ResizeObserver(apply);
            if (elRef?.value) ro.observe(elRef.value);
        }

        // 2) Recalcula al cambiar tamaño de ventana
        onResize = () => apply();
        window.addEventListener("resize", onResize);

        // 3) Primer cálculo
        // pequeño delay por si hay imágenes/slots que demoran
        requestAnimationFrame(() => apply());
        setTimeout(apply, 200);
    });

    onBeforeUnmount(() => {
        if (ro && elRef?.value) ro.unobserve(elRef.value);
        if (onResize) window.removeEventListener("resize", onResize);
    });

    return { recompute: apply }; // por si quieres forzar un recalculo manual
}
