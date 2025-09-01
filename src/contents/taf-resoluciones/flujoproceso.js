export default `
<h4 class="mt-4">Flujo del Proceso</h4>

<p class="mt-2">
  El proyecto de <strong>TAF-Resoluciones</strong> nace ante la necesidad de comprender por qué las resoluciones manuales emitidas por el <strong>SGF</strong> y las resoluciones <strong>centralizadas</strong> (Proceso Centralizado), que son susceptibles de cobro y reclamos, generan diferencias respecto del monto de pago de impuesto o en los elementos que sirven de base para determinarlo.
</p>
<p class="mt-2">
  El proceso de resoluciones es relevante de analizar para comprender las diferencias generadas, desde la creación de la resolución hasta que se decreta el resultado final de la impugnación o reclamo. En este trabajo se busca <strong>crear un modelo con trazabilidad completa</strong> de las resoluciones, describiendo las etapas que debe considerar la solución.
</p>

<hr>

<h4 class="mt-4">1. Origen: SGF (Sistema de Gestión de Fiscalización)</h4>
<p class="mt-2">
  Los datos de las resoluciones se originan en el sistema SGF. Un proceso de <strong>Change Data Capture (CDC)</strong> a través de <strong>Triggers</strong> de Oracle en las tablas involucradas detecta cambios que cumplan con la lógica de negocio para generar una transacción que servirá de fuente para el sistema de TAF-Resoluciones.
</p>

<div class="accordion mt-3" id="accordionSGF">
  <div class="accordion-item">
    <p class="accordion-header" id="headingSGF">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSGF" aria-expanded="true" aria-controls="collapseSGF">
        Tablas involucradas y su función
      </button>
    </p>
    <div id="collapseSGF" class="accordion-collapse collapse show" aria-labelledby="headingSGF" data-bs-parent="#accordionSGF">
      <div class="accordion-body">
        <ul class="list-unstyled mb-0">
          <li class="mb-2"><strong>MGF_ATENCIONES:</strong> Registra cada atención fiscalizadora individual. Es la tabla principal en la cual se definen los triggers para los eventos. Los triggers reaccionan si el <code>STAT_COD</code> es 19 o 40.</li>
          <li class="mb-2"><strong>MGF_VALOR_ATENCION:</strong> Almacena los valores asociados a una atención, como número de resolución, fechas, tipo, monto, etc. Estos valores son identificados por un <code>CATN_COD</code>.</li>
          <li class="mb-2"><strong>MGF_CASOS:</strong> Relaciona las atenciones con el contribuyente y se utiliza para enriquecer el evento CDC, ya que esta tabla contiene datos del contribuyente (RUT y razón social).</li>
          <li class="mb-2"><strong>MGF_TIPOS_PROCESOFISC:</strong> Tabla de catálogo que identifica el tipo de fiscalización.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="alert alert-warning mt-4" role="alert">
<i class="bi bi-info-circle-fill me-2"></i>
  <strong>¿Qué ocurre en esta etapa? </strong>
  Los triggers de <strong>CDC</strong> detectan los cambios de estado de la resolución en la tabla <strong><code>MGF_ATENCIONES</code></strong>. Una vez que se gatilla el evento, se consulta la tabla <strong>MGF_CASOS</strong> y <strong>GF_TIPOS_PROCESOFISC</strong> y se genera un mensaje <strong>JSON</strong> enriquecido con la información relevante. Este mensaje es publicado en la cola de Oracle AQ <code>taf_inbound_event_adapter</code>.
</div>

<hr>

<h4 class="mt-4">2. Integración en TAF (Microservicio Java Spring Boot)</h4>
<p class="mt-2">
  El microservicio de TAF se suscribe a la cola de mensajes de Oracle AQ. Este microservicio tiene una capa de <strong>persistencia</strong> donde se guarda la data que llega de SGF.
</p>

<div class="table-responsive mb-4">
  <table class="table table-bordered table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th scope="col">Tabla TAF</th>
        <th scope="col">Función</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>SGFTR_CDC_EVENT_ADAPTER</strong></td>
        <td>Esta tabla se utiliza para la auditoría y para guardar los cambios de valor de campo que llegan en el JSON. Guarda la columna, el valor anterior, el valor nuevo y el timestamp.</td>
      </tr>
      <tr>
        <td><strong>SGFTR_CDC_EVENT_ADAPTER_MSG</strong></td>
        <td>Guarda el mensaje JSON completo que llegó a la cola y su estado (procesado, en error, etc.).</td>
      </tr>
      <tr>
        <td><strong>SGFTR_RESOLUCIONES</strong></td>
        <td>Es la tabla que consolida la información proveniente de SGF. El microservicio actualiza o crea las resoluciones en esta tabla según el <code>NRO_CASO</code> y <code>ATN_CORR</code> que viene en el JSON.</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="mt-2">
  Una vez consolidada la información en TAF, los datos se encuentran disponibles para ser consultados por el frontend.
</p>

<hr>

<h4 class="mt-4">3. ETL desde Sistemas Externos hacia TAF</h4>
<p class="mt-2">
  Los sistemas de <strong>eFolder</strong> y <strong>SIAG</strong> son la fuente de datos para obtener el estado de impugnación y/o reclamo de las resoluciones. Un proceso de <strong>ETL (Extract, Transform, Load)</strong> en formato <strong>batch</strong> se ejecuta de forma periódica para extraer la información de estos sistemas.
</p>
<p class="fw-bold kb-color">Tablas de Staging</p>
<p>
    Estas tablas se utilizan para el ingreso de datos crudos desde los sistemas de origen y no son consultadas directamente por el negocio. Su función principal es servir como base para la trazabilidad y el reprocesamiento de la información.
</p>

<div class="table-responsive">
    <table class="table table-bordered table-sm align-middle">
        <thead class="table-light">
            <tr>
                <th scope="col">Tabla</th>
                <th scope="col">Descripción</th>
                <th scope="col">Sistema de Origen</th>
                <th scope="col">Uso</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>SGFTR_RECLAMOS_RES_EFOLDER_RAW</code></td>
                <td>Staging para datos de reclamos.</td>
                <td>E-Folder</td>
                <td>Sirve para la trazabilidad y el reprocesamiento.</td>
            </tr>
            <tr>
                <td><code>SGFTR_IMPUGNACION_RES_SIAG_RAW</code></td>
                <td>Staging para datos de impugnaciones.</td>
                <td>SIAG</td>
                <td>Sirve para la trazabilidad y el reprocesamiento.</td>
            </tr>
        </tbody>
    </table>
</div>

<p class="mt-4">
    Los datos de estas tablas <em>RAW</em> son transformados y enriquecidos en los procesos batch, que luego los consolidan en las tablas finales consultadas por el negocio, como <code>SGFTR_RECLAMOS_RES</code> y <code>SGFTR_IMPUGNACION_RES</code>.
</p>
<p class="mt-2">
  La información de estos sistemas llega a unas tablas en TAF que son llamadas <strong>tablas RAW</strong> (datos crudos, sin procesar).
</p>
<p class="mt-2">
  Este proceso se encarga de realizar la integración de la información de las tablas RAW de eFolder y SIAG, aplicando reglas de negocio para unirlas con la información ya consolidada en TAF (tabla <code>SGFTR_RESOLUCIONES</code>). Una vez que los datos son procesados, se almacenan en tablas definitivas, que son las que se exponen para su consulta.
</p>

<div class="accordion mt-3" id="accordionETL">
  <div class="accordion-item">
    <p class="accordion-header" id="headingETL">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseETL" aria-expanded="true" aria-controls="collapseETL">
        Reglas de Integración
      </button>
    </p>
    <div id="collapseETL" class="accordion-collapse collapse show" aria-labelledby="headingETL" data-bs-parent="#accordionETL">
      <div class="accordion-body">
        <ul class="list-unstyled mb-0">
          <li class="mb-2"><strong>Para SGFTR_RECLAMOS_RES:</strong> Se requiere match entre <code>NUMERO_RESOLUCION</code> (de la tabla RAW de eFolder) y <code>NUMERO</code> (de la tabla <code>SGFTR_RESOLUCIONES</code>), además del <code>RUT_CNTR</code>.</li>
          <li class="mb-2"><strong>Para SGFTR_IMPUGNACION_RES:</strong> El join requiere: <code>RES_NUM_RESOLUCION = NUMERO</code>, <code>RAF_RUT_CONTRIBUYENTE = RUT_CNTR</code> y <code>REGIONAL = DIRECCION_REGIONAL</code>.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="alert alert-warning mt-4" role="alert">
  <i class="bi bi-info-circle-fill me-2"></i>
  <strong>Consumo y explotación final:</strong> Las tablas <code>SGFTR_RECLAMOS_RES</code> y <code>SGFTR_IMPUGNACION_RES</code> son las fuentes oficiales para las consultas del negocio. Las tablas RAW solo se usan para trazabilidad técnica y reproceso de la información, pero no se exponen al usuario final.
</div>

<hr>

<h4 class="mt-4">4. Ejemplo de Flujo Paso a Paso</h4>
<ol class="mt-3">
  <li>En SGF ocurre un cambio relevante (por ejemplo, el <code>STAT_COD</code> cambia a 19).</li>
  <li>El trigger de CDC genera un JSON y lo publica en la cola AQ.</li>
  <li>El microservicio TAF consume el mensaje de la cola y actualiza la tabla <code>SGFTR_RESOLUCIONES</code>.</li>
  <li>Llega un nuevo registro desde eFolder y se almacena en la tabla RAW <code>SGFTR_RECLAMOS_RES_EFOLDER_RAW</code>.</li>
  <li>El proceso batch de ETL hace el JOIN con la tabla <code>SGFTR_RESOLUCIONES</code> y guarda el resultado en la tabla definitiva <code>SGFTR_RECLAMOS_RES</code>.</li>
</ol>

<hr>

<p class="mt-4 fw-bold kb-color">Diccionario de Términos Técnicos</p>
<div class="table-responsive mb-4">
  <table class="table table-bordered table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th scope="col">Término</th>
        <th scope="col">Definición</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>CDC</strong></td>
        <td><em>Change Data Capture</em>: Proceso que captura los cambios realizados en una base de datos para tomar acciones sobre ellos. En este caso, captura cambios en las tablas de SGF.</td>
      </tr>
      <tr>
        <td><strong>Trigger</strong></td>
        <td>Procedimiento almacenado que se ejecuta automáticamente cuando ocurre un evento específico en el servidor de la base de datos (por ejemplo, una inserción, actualización o borrado).</td>
      </tr>
      <tr>
        <td><strong>AQ</strong></td>
        <td><em>Oracle Advanced Queuing</em>: Sistema de colas de mensajes transaccionales de Oracle. Sirve para el intercambio de mensajes entre sistemas de forma asíncrona.</td>
      </tr>
      <tr>
        <td><strong>Batch ETL</strong></td>
        <td>Un proceso de lote (batch) que se encarga de la **Extracción**, **Transformación** y **Carga** de datos de forma periódica, sin intervención manual.</td>
      </tr>
      <tr>
        <td><strong>Tabla RAW</strong></td>
        <td>Una tabla de "staging" o zona de aterrizaje para datos crudos, tal como se extraen del sistema origen, que luego son procesados para ser llevados a una tabla definitiva.</td>
      </tr>
      <tr>
        <td><strong>Tabla definitiva</strong></td>
        <td>Una tabla de datos ya procesados, enriquecidos y limpios, que está lista para ser consultada por el negocio y los usuarios finales.</td>
      </tr>
    </tbody>
  </table>
</div>
`;
