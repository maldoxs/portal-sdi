export default `
<p>
  El proyecto TAF-Resoluciones se encuentra gestionado en la plataforma de repositorios Git del SII. Esta sección te guiará a través de los diferentes componentes que conforman el proyecto y te proporcionará los enlaces directos para acceder a cada uno.
</p>

<div class="alert alert-primary" role="alert">
  <h4>Repositorio Principal</h4>
  <p class="mb-0">
    El acceso a todos los repositorios se encuentra centralizado en el siguiente enlace:
    <a href="http://cefio.sii.cl/taf/resoluciones" target="_blank" class="alert-link">
      <strong>http://cefio.sii.cl/taf/resoluciones</strong>
    </a>
  </p>
</div>

<p>
  El proyecto se compone de un frontend y tres microservicios, cada uno con una función específica dentro de la arquitectura de la aplicación.
</p>



<div class="row align-items-center mb-4">
  <div class="col-auto">
    <i class="bi bi-file-code fs-3 kb-color-gris"></i>
  </div>
  <div class="col">
    <p class="fw-bold mb-0 fs-5">Frontend</p>
    <p class="mb-0 text-muted">La interfaz de usuario y la lógica de presentación.</p>
  </div>
</div>
<p>
  Este repositorio contiene la capa visual del proyecto TAF-Resoluciones. Su objetivo principal es ofrecer una interfaz de usuario clara, intuitiva y funcional que permita a los usuarios interactuar de manera fluida con los datos y funcionalidades del sistema.
</p>



<div class="row align-items-center mb-4">
  <div class="col-auto">
    <i class="bi bi-gear-fill fs-3 kb-color-gris"></i>
  </div>
  <div class="col">
    <p class="fw-bold mb-0 fs-5">TAF-Resoluciones-Batch</p>
    <p class="mb-0 text-muted">Procesos de importación y transformación de datos.</p>
  </div>
</div>
<p>
  Encargado de manejar grandes volúmenes de datos. Este microservicio ejecuta tareas programadas para la importación, transformación y procesamiento de la información, asegurando que los datos estén siempre actualizados y disponibles para ser consumidos por el resto de la plataforma.
</p>



<div class="row align-items-center mb-4">
  <div class="col-auto">
    <i class="bi bi-broadcast-pin fs-3 kb-color-gris"></i>
  </div>
  <div class="col">
    <p class="fw-bold mb-0 fs-5">TAF-Resoluciones-MS</p>
    <p class="mb-0 text-muted">Microservicio de la API principal.</p>
  </div>
</div>
<p>
  Este microservicio expone la API de TAF-Resoluciones. Actúa como el puente de comunicación entre el frontend y los procesos del backend, permitiendo la consulta segura y eficiente de la información de las resoluciones administrativas.
</p>



<div class="row align-items-center mb-4">
  <div class="col-auto">
    <i class="bi bi-arrow-left-right fs-3 kb-color-gris"></i>
  </div>
  <div class="col">
    <p class="fw-bold mb-0 fs-5">TAF-SGFAdapter-MS</p>
    <p class="mb-0 text-muted">Adaptador de comunicación con el sistema SGF.</p>
  </div>
</div>
<p>
  Este componente especializado se encarga de la integración con el Sistema de Gestión de Fiscalización (SGF). Centraliza la lógica de conexión y la traducción de datos, facilitando la consulta y el seguimiento de las resoluciones administrativas directamente desde TAF-Resoluciones.
</p>

<div class="alert alert-info mt-5" role="alert">
  <i class="bi bi-info-circle-fill me-2"></i>
  Para más detalles sobre la configuración, ejecución y componentes internos de cada repositorio, consulta el archivo <strong>README.md</strong> que se encuentra en su respectiva carpeta.
</div>
`;
