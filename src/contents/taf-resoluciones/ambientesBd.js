export default `
<h4 class="mt-3">Ambientes Taf-Resoluciones</h4>
<p class="mt-2">
  El sistema <strong>TAF-Resoluciones</strong> se encuentra desplegado en distintos ambientes
  (Desarrollo, Certificación y Producción). Cada ambiente utiliza servidores, bases de datos
  y configuraciones específicas que permiten realizar pruebas, validaciones y operación en vivo.
  La siguiente tabla detalla la infraestructura asociada a cada ambiente.
</p>

<div class="table-responsive mt-4">
  <table class="table table-bordered table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th>Sistema</th>
        <th>Ambiente</th>
        <th>Servidor</th>
        <th>BD</th>
        <th>Puerto</th>
        <th>Owner</th>
        <th>Pass</th>
        <th>Explotador</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>TAF-R</td>
        <td>Desarrollo</td>
        <td>queilen</td>
        <td>koala</td>
        <td>1540</td>
        <td>SGFTR</td>
        <td>sgftr</td>
        <td>SGFTREXP</td>
      </tr>
      <tr>
        <td>TAF-R</td>
        <td>Certificación</td>
        <td>Imperial71</td>
        <td>llama</td>
        <td>1500</td>
        <td>SGFTR</td>
        <td>sgftrcon2021</td>
        <td>SGFTREXP</td>
      </tr>
      <tr>
        <td>TAF-R</td>
        <td>Producción</td>
        <td>Epsilon</td>
        <td>pangolin</td>
        <td>—</td>
        <td>SGFTR</td>
        <td>—</td>
        <td>SGFTREXP</td>
      </tr>
    </tbody>
  </table>
</div>
`;
