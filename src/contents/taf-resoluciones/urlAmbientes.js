export default `
<h4 class="mt-3">Ambientes Taf-Resoluciones</h4>
<p class="mt-2">
  El sistema <strong>TAF-Resoluciones</strong> se encuentra desplegado en distintos ambientes
  (Desarrollo, Certificación y Producción). Cada ambiente utiliza servidores, bases de datos
  y configuraciones específicas que permiten realizar pruebas, validaciones y operación en vivo.
  La siguiente tabla detalla la infraestructura asociada a cada ambiente.
</p>



<p class="mt-4 fw-bold kb-color fs-5">Ambiente de Desarrollo</p>
<p>
  Este es el espacio de trabajo para los desarrolladores. Aquí se escriben las nuevas funcionalidades,
  se corrigen errores y se realizan las primeras pruebas unitarias. La base de datos es local o
  de desarrollo, y no contiene datos reales de producción.
</p>

<div class="table-responsive mt-2">
  <table class="table table-bordered table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th>Ambiente</th>
        <th>URL</th>
        <th>Usuario</th>
        <th>Clave</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Desarrollo</b></td>
        <td><a href="pullinquedesa04.sii.cl/taf-resoluciones-intra/" target="_blank"><code>pullinquedesa04.sii.cl/taf-resoluciones-intra/</code></a></td>
        <td><code>cruiz</code></td>
        <td><code>Servicio.2021</code></td>
      </tr>
    </tbody>
  </table>
</div>



<p class="mt-4 fw-bold kb-color fs-5">Ambiente de Certificación (QA/Staging)</p>
<p>
  Este entorno es una réplica casi exacta del ambiente de producción. Su propósito principal
  es realizar pruebas de validación de calidad, pruebas de regresión, pruebas de integración
  y validaciones con usuarios. Es la última etapa antes de que el código sea liberado a producción.
</p>

<div class="table-responsive mt-2">
  <table class="table table-bordered table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th>Ambiente</th>
        <th>URL</th>
        <th>Usuario</th>
        <th>Clave</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Certificación</b></td>
        <td><a href="https://clintqa.sii.cl/taf-resoluciones-intra/" target="_blank"><code>https://clintqa.sii.cl/taf-resoluciones-intra/</code></a></td>
        <td><code>cruiz</code></td>
        <td><code>Servicio.2021</code></td>
      </tr>
    </tbody>
  </table>
</div>



<p class="mt-4 fw-bold kb-color fs-5">Ambiente de Producción</p>
<p>
  Este es el entorno final donde la aplicación opera para los usuarios en vivo. Contiene datos reales y
  cualquier cambio o despliegue en este ambiente debe seguir un protocolo estricto para asegurar la
  estabilidad y el rendimiento del sistema.
</p>

<div class="table-responsive mt-2">
  <table class="table table-bordered table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th>Ambiente</th>
        <th>URL</th>
        <th>Usuario</th>
        <th>Clave</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Producción</b></td>
        <td><code>[URL-PRODUCCION-AQUÍ]</code></td>
        <td><code>[USUARIO-PRODUCCION-AQUÍ]</code></td>
        <td><code>[CLAVE-PRODUCCION-AQUÍ]</code></td>
      </tr>
    </tbody>
  </table>
</div>
`;
