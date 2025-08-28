export default `<h4 class="mt-4">Introducción</h4>
    <p>
      Los <strong>Jiras asociados al proyecto TAF-Resoluciones</strong> permiten gestionar de forma
      centralizada los requerimientos, sub-tareas y pasos a producción. A través de ellos se asegura la
      trazabilidad completa del ciclo de vida: desde la creación de un requerimiento hasta la puesta en producción.
    </p>

    <div class="alert alert-primary mt-4" role="alert">
      <h4 class="fw-bold">Acceso Principal</h4>
      <p class="mb-0">
        Consulta todos los Jiras vinculados al proyecto en el siguiente enlace: <br>
        <a href="http://jira:8080/browse/SDI-268700" target="_blank" class="alert-link">
          <strong>http://jira:8080/browse/SDI-268700</strong>
        </a>
      </p>
    </div>

    <h4 class="mt-4">¿Qué se gestiona en los Jiras?</h4>

<div class="accordion mt-3" id="accordionJiras">
  <!-- Requerimientos -->
  <div class="accordion-item">
    <p class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Requerimientos
      </button>
    </p>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionJiras">
      <div class="accordion-body">
        Describen el origen, objetivos y alcance funcional del proyecto.
      </div>
    </div>
  </div>

  <!-- Sub-tareas -->
  <div class="accordion-item">
    <p class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Sub-tareas
      </button>
    </p>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionJiras">
      <div class="accordion-body">
        Detallan el trabajo técnico (creación de modelo de datos, despliegues, actualizaciones de properties, etc.).
      </div>
    </div>
  </div>

  <!-- Pasos a producción -->
  <div class="accordion-item">
    <p class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Pasos a producción
      </button>
    </p>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionJiras">
      <div class="accordion-body">
        Registran las evidencias necesarias para aprobar e implementar cambios en los distintos ambientes.
      </div>
    </div>
  </div>

  <!-- Seguimiento -->
  <div class="accordion-item">
    <p class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Seguimiento
      </button>
    </p>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionJiras">
      <div class="accordion-body">
        Cada Jira indica responsables, fechas clave y estado de avance.
      </div>
    </div>
  </div>
</div>


    <h4 class="mt-5">Ejemplo de Sub-tareas en TAF-Resoluciones</h4>
    <div class="table-responsive">
      <table class="table table-bordered table-sm align-middle">
        <thead class="table-light">
          <tr>
            <th>Jira</th>
            <th>Descripción</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="http://jira:8080/browse/SDI-268710" target="_blank">SDI-268710</a></td>
            <td>Creación Modelo TAF-Resoluciones</td>
            <td><span class="badge bg-success">Cerrada</span></td>
          </tr>
          <tr>
            <td><a href="http://jira:8080/browse/SDI-268712" target="_blank">SDI-268712</a></td>
            <td>Despliegue en nube privada (CEX)</td>
            <td><span class="badge bg-info">En curso</span></td>
          </tr>
          <tr>
            <td><a href="http://jira:8080/browse/SDI-268907" target="_blank">SDI-268907</a></td>
            <td>Actualización de properties</td>
            <td><span class="badge bg-warning text-dark">Pendiente</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="alert alert-info mt-4" role="alert">
      <i class="bi bi-info-circle-fill me-2"></i>
      <strong>Importante:</strong> Cada paso a producción debe estar respaldado en Jira con evidencias,
      responsables asignados y validación por parte del Comité Técnico.
    </div>

    `;
