<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 border-bottom color">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                <i class="bi bi-check-circle-fill text-primary"></i> KnowAll
            </router-link>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            >Features</a
                        >
                        <ul class="dropdown-menu">
                            ...
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#">Blocks</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">FAQ</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Buy KnowAll</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import "bootstrap/dist/js/bootstrap.bundle.min.js";
</script>
