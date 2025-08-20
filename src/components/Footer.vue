<template>
    <footer class="mt-5 py-4 border-top text-muted">
        <div class="container">
            <!-- <div class="row">
                <div class="col-md-6 mb-3">
                    <h5>Departamento de Sistemas de Impuestos Directos e Indirectos</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="text-muted" href="#">Política de Privacidad</a></li>
                        <li><a class="text-muted" href="#">Términos de Servicio</a></li>
                    </ul>
                </div>
                <div class="col-md-6 mb-3">
                    <h5>Contacto</h5>
                    <ul class="list-unstyled text-small">
                        <li>Teléfono: +56 2 2345 6789</li>
                        <li>Email: ayuda@sii.cl</li>
                        <li>Dirección: Avenida Libertador Bernardo O'Higgins 1234, Santiago</li>
                    </ul>
                </div>
            </div> -->
            <p class="text-center mt-3 mb-0">
                &copy; {{ currentYear }} - Todos los derechos reservados.
            </p>
        </div>
    </footer>
</template>

<script setup>
    import { ref } from "vue";

    const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
    /* Estilos opcionales para el footer */
    footer {
        background-color: #f8f9fa; /* Color de fondo gris claro */
    }
</style>
