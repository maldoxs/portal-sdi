export default `
<h4 id="introduccion">1.Introducción</h4>
    <p class="mt-4">
      Actualmente existe la necesidad de entender por qué las resoluciones manuales emitidas por
      el <strong>SGF</strong> y las resoluciones <strong>centralizadas</strong> (Proceso Centralizado),
      que son susceptibles de cobro y reclamos, generan <em>diferencias</em> respecto del monto de pago
      de impuesto o en los elementos que sirven de base para determinarlo.
    </p>
    <p>
      El proceso de resoluciones es relevante de analizar para comprender las diferencias generadas,
      desde la creación de la resolución hasta que se decreta el resultado final de la impugnación o
      reclamo. En este trabajo buscamos <strong>crear un modelo con trazabilidad completa</strong> de las
      resoluciones, describiendo las <strong>etapas</strong> que debe considerar la solución.
    </p>

    <h4 class="mt-4">2.Descripción General</h4>
    <p>2.1 Descripción proceso Actual</p>
    <p class="mt-4">
      En la siguiente sección se describirá cómo funciona el proceso actual, y qué se requiere para
      desarrollar un sistema integrado que permita tener la trazabilidad de las resoluciones emitidas.
    </p>
    <p>
      En estos momentos el proceso de Resoluciones no contiene un sistema unificado que incorpore
      cada una de las etapas que sigue una resolución.
    </p>

    <p>A continuación, se muestra un modelo de funcionamiento actual del proceso de Resoluciones:</p>

    <div class="text-center my-4">
      <img src="/img/descripcion_proceso.png"
           alt="Modelo de resolución actual"
           style="max-width: 100%; height: auto;" />
      <p class="text-muted mt-2"><em>Ilustración 1. Modelo de resolución actual</em></p>
    </div>

    <p>
      De la ilustración anterior se evidencia que existen 2 procesos que generan información y que
      no tienen comunicación entre sí. Esto lleva a pérdidas de información al momento de hacer trazabilidad,
      lo que se traduce en no poder identificar históricamente si una resolución fue impugnada y/o reclamada.
    </p>

     <h4 id = "primitiva" class="mt-4">2.2 Primitiva</h4>
     <p>Respecto a la emisión de resoluciones, estas se realizan desde dos aplicativos: </p>
    <p class="fw-bold kb-color">2.2.1 SGF </p>
    <p>Para crear una resolución, el funcionario debe ingresar al sistema de gestión fiscalizadora (SGF) y crear un caso ingresando la información requerida tal como se ve en la siguiente imagen: </p>

     <div class="text-center my-4">
      <img src="/img/crea_resolucion.png"
           alt="Modelo de resolución actual"
           style="max-width: 100%; height: auto;" />
      <p class="text-muted mt-2"><em>Ilustración 2. Crear una resolución</em></p>
    </div>
    <p>Luego en el módulo “Detalle de caso”, en el apartado “Tipo de atención” el funcionario debe seleccionar la opción Resultado-Otros, donde se despliega el siguiente recuadro: </p>
       <div class="text-center my-4">
      <img src="/img/resultado-otros.png"
           alt="Modelo de resolución actual"
           style="max-width: 100%; height: auto;" />
      <p class="text-muted mt-2"><em>Ilustración 3. Modelo de resolución actual</em></p>
    </div>

<div class="d-flex align-items-start gap-2 mb-3">
  <span class="step-number">1</span>
  <p class="kb-color fw-bold mb-0">Información General</p>
</div>
    <ul>
      <li><strong>Nro. de caso:</strong> Número que se asigna cuando se crea el caso.</li>
      <li><strong>RUT:</strong> Rol Único Tributario de la persona natural o jurídica.</li>
      <li><strong>Programa:</strong> Corresponde a la regional donde se levanta el caso.</li>
      <li><strong>Nombre o razón social:</strong> Nombre de la persona natural o jurídica.</li>
    </ul>


    <div class="d-flex align-items-start gap-2 mb-3">
      <span class="step-number">2</span>
      <p class="kb-color fw-bold mb-0">Ingreso Resultado</p>
    </div>

    <ul>
      <li><strong>Tipo Resultado:</strong> Para la finalidad de este proyecto se considera el tipo resultado “Resolución”.</li>
      <li><strong>Fecha Resultado:</strong> Fecha de la firma de la resolución (se indica en el documento de resolución).</li>
    </ul>


     <div class="d-flex align-items-start gap-2 mb-3">
      <span class="step-number">3</span>
      <p class="kb-color fw-bold mb-0">Detalle Resultado</p>
    </div>



    <ul>
      <li><strong>Nro. Citación:</strong> Número de citación otorgada por la Regional y que se carga automáticamente.</li>
      <li><strong>Fecha Documento Resolución:</strong> Fecha indicada en el documento de la resolución.</li>
      <li><strong>Fecha Notificación Resolución:</strong> Fecha en que se notifica la resolución al contribuyente.</li>
      <li><strong>Tipo Resolución:</strong> Puede ser masiva o selectiva.</li>
      <li><strong>Nro. Resolución:</strong> Número que se indica en el documento de la resolución.</li>
      <li><strong>Monto Resolución:</strong> Monto indicado en el “Se Resuelve” del documento de la resolución.</li>
      <li><strong>Forma Notificación Resolución:</strong> Medio de notificación al contribuyente: carta certificada, cédula, personal, electrónica o por página web.</li>
    </ul>

    <h4 id="proceso-centralizado-pc" class="mt-4">2.2.2 Proceso Centralizado (PC)</h4>
<p>
  Para el proceso que realiza la <strong>generación y notificación de resoluciones masivas</strong>,
  se deben tener en consideración los aplicativos utilizados para realizar estas acciones.
</p>

<p><strong>Fiscarta</strong></p>
<p>
  Este aplicativo permite generar el formato y contenido de las resoluciones, mediante una
  <em>nómina de contribuyentes</em> que debe ser cargada a través de ODP. Estas nóminas tienen su origen
  en contribuyentes que solicitaron devolución a través del <strong>formulario 22</strong>, y las cuales,
  por alguna observación no aclarada, se deniega la petición generando una resolución.
  Estas resoluciones se generan después de un período de 3 años del año tributario solicitado.
</p>

<p><strong>Anco-Fea</strong></p>
<p>
  Este aplicativo permite visualizar los posibles estados de las resoluciones enviadas a través
  de las casillas de correo electrónico, con el fin de dar seguimiento al estado final de estas.
</p>

información que se registra</span> en una impugnación en el aplicativo SIAG es la siguiente:
</p>

<h4 id="impugnacion-reclamo" class="mt-4">2.3 Impugnación o Reclamo</h4>

<p><strong>Siag</strong></p>
<div class="alert alert-warning mt-3">
  <p>Existen dos formas de ingresar una impugnación, por una parte, el contribuyente ingresa la impugnación por internet a través del aplicativo SIAG o por otro lado el contribuyente puede notificar por correo electrónico la solicitud de impugnación y posteriormente se ingresa internamente por la secretaria de cada regional. Estas impugnaciones se realizan mediante los recursos administrativos de Reposición Administrativa Voluntaria (RAV) y Revisión de la Actuación Fiscalizadora (RAF) establecidos en los artículos 123 bis y 6° letra B N° 5 C.T. (Circular 12 de 2021).
La información que se registra en una impugnación en el aplicativo SIAG es la siguiente: </p>
</div>


<p>
  Esta información se agrega cuando el contribuyente crea la impugnación en SIAG,
  o cuando el funcionario la ingresa manualmente.
</p>

<div class="table-responsive mb-4">
  <table class="table table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th>Campo</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>N° Caso</td></tr>
      <tr><td>Jefe responsable</td></tr>
      <tr><td>Fecha presentación</td></tr>
      <tr><td>Tipo solicitud</td></tr>
      <tr><td>Rut contribuyente</td></tr>
      <tr><td>Nombre contribuyente</td></tr>
      <tr><td>Rut representante</td></tr>
      <tr><td>Nombre representante</td></tr>
      <tr><td>Sistema origen</td></tr>
      <tr><td>Estado caso</td></tr>
      <tr><td>Fundamentos</td></tr>
      <tr><td>N° expediente electrónico</td></tr>
      <tr><td>N° atención expediente electrónico</td></tr>
      <tr><td>Rut funcionario asignado</td></tr>
      <tr><td>Nombre funcionario</td></tr>
    </tbody>
  </table>
</div>

<p class="mt-4">Detalles de la resolución (cierre de impugnación)</p>
<p class="mb-2">
  Esta información la ingresa el <strong>jefe responsable</strong> al cerrar la respuesta de la impugnación.
</p>

<div class="table-responsive">
  <table class="table table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th>Campo</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Número de resolución</td></tr>
      <tr><td>Fecha de emisión</td></tr>
      <tr><td>Fecha notificación</td></tr>
      <tr><td>Monto</td></tr>
      <tr><td>Monto a revisar</td></tr>
      <tr><td>Tipo de moneda</td></tr>
      <tr><td>Resultado</td></tr>
      <tr><td>Monto ha lugar</td></tr>
      <tr><td>Monto dif. imp. (diferencia de impuesto)</td></tr>
      <tr><td>Tipo de resolución</td></tr>
    </tbody>
  </table>
</div>

<h4 class="mt-4">2.3.2 E-Folder</h4>
<p>
  El contribuyente puede realizar un reclamo a un ente externo al SII, el cual puede tener como máximo las siguientes etapas:
</p>

<ol>
  <li>Reclamo en el TTA</li>
  <li>Apelación en la Corte de Apelaciones</li>
  <li>Apelación en la Corte Suprema</li>
</ol>



<div class="alert alert-warning mt-3">
  <p>
  El E-Folder es un aplicativo ejecutado exclusivamente por los abogados de cada regional.
  La secretaría de cada regional se encarga de crear la carpeta agregando toda la información de la causa (Reclamo).
  Además, es importante mencionar que el TTA individualiza las causas por N° de RIT y RUC.
</p>
</div>

<p class="mt-4 fw-bold kb-color">Primera instancia</p>
<p>
  Inicialmente se crea la primera instancia en la que se detallan los siguientes campos:
</p>

<ul>
  <li>N° Carpeta</li>
  <li>Procedimiento</li>
  <li>Carátula</li>
  <li>RIT</li>
  <li>RUC</li>
  <li>Tribunal</li>
  <li>Unidad responsable</li>
  <li>Fecha reclamo</li>
  <li>Fecha traslado</li>
  <li>Fecha contestación</li>
  <li>Abogado contribuyente</li>
  <li>Apoderados contribuyente</li>
  <li>Existe reclamo</li>
  <li>Motivo reclamo / Recurso</li>
</ul>

<p class="mt-4 fw-bold kb-color">Sentencia primera instancia</p>
<p>
  Una vez se emite la sentencia, el abogado a cargo del caso debe agregar la información en la sección “Sentencia de primera Instancia” detallando los siguientes campos:
</p>

<ul>
  <li>Fecha sentencia</li>
  <li>Fecha notificación sentencia contribuyente</li>
  <li>Decisión de sentencia</li>
  <li>Resultado sentencia</li>
  <li>Condena en costas</li>
  <li>Monto costas</li>
  <li>Evento relevante giro</li>
  <li>Suspensión de cobros</li>
  <li>Observaciones</li>
</ul>

<p class="mt-4 kb-color fw-bold">Segunda instancia y Corte Suprema</p>
<p>
  Para la segunda instancia (Corte de Apelaciones) y la tercera instancia (Corte Suprema) se ingresan los mismos campos.
  Las instancias se van habilitando manualmente en la medida que se continúe con el reclamo por una de las partes.
</p>

<ul>
  <li>Rol</li>
  <li>Libro</li>
  <li>Tipo de recurso</li>
  <li>Fecha interposición</li>
  <li>Motivo reclamo</li>
  <li>Corte / Tribunal</li>
  <li>Abogado contribuyente</li>
  <li>Apoderados contribuyente</li>
</ul>

<p class="mt-4 fw-bold kb-color">Sentencia segunda instancia y Corte Suprema</p>
<p>
  Una vez se emite la sentencia, el abogado a cargo del caso debe agregar la información en la sección “Sentencia de segunda Instancia” detallando los siguientes campos:
</p>

<ul>
  <li>Fecha sentencia</li>
  <li>Decisión de sentencia</li>
  <li>Recurrente</li>
  <li>Resultado sentencia</li>
  <li>Condenan en costas</li>
  <li>Monto costas</li>
  <li>Evento relevante giro</li>
  <li>Suspensión de cobro</li>
  <li>Observaciones</li>
</ul>

<p>Además, la aplicación E‑Folder contiene otras pestañas de información. En la pestaña <em>Acto Reclamado</em> se registran los siguientes campos:</p>

<ul>
  <li><strong>Id E‑Folder</strong></li>
  <li><strong>N° folio</strong></li>
  <li><strong>Tipo de acto</strong></li>
  <li><strong>Fecha notificación</strong></li>
  <li><strong>Materia</strong></li>
  <li><strong>Rol Avalúo</strong></li>
  <li><strong>Acción de</strong></li>
  <li><strong>Conexión SIAG</strong></li>
</ul>

<h4 class="mt-4">3. Libro de Resoluciones nuevo Sistema</h4>
<p>Para tener un sistema integrado, el cuál permita realizar trazabilidad de las resoluciones, abarcando las diferentes situaciones que se pueden dar en el ámbito de estos documentos, es que se requiere unificar los distintos sistemas que actualmente realizan una función apartada, teniendo como enfoque principal, la resolución emitida por el SII. Para esto a continuación se muestra un modelo que será nuestra guía para desarrollar este nuevo libro de resoluciones:</p>

     <div class="text-center my-4">
      <img src="/img/libro-resoluciones.png"
           alt="Modelo de resolución actual"
           style="max-width: 100%; height: auto;" />
      <p class="text-muted mt-2"><em>Ilustración 4. Modelo Libro de Resoluciones</em></p>
    </div>


   <h4 class="mt-4">3.1 Funcionamiento del Sistema</h4>
    <p class="mt-4 fw-bold kb-color">3.1.1 Llave Primaria</p>
<p>
  Para poder conectar la información de los distintos sistemas se definió generar una
  <em>llave primaria</em> que concatene los siguientes campos de cada aplicativo:
</p>

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Aplicativo</th>
      <th>Libro de Liquidaciones</th>
      <th>SGF</th>
      <th>Proceso Centralizado</th>
      <th>SIAG</th>
      <th>E-Folder</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Campo 1</strong></td>
      <td>Año Notificación</td>
      <td>Año Notificación</td>
      <td>Año Notificación</td>
      <td>Año Notificación</td>
      <td>Año Notificación</td>
    </tr>
    <tr>
      <td><strong>Campo 2</strong></td>
      <td>RUT Contribuyente</td>
      <td>RUT Contribuyente</td>
      <td>RUT Contribuyente</td>
      <td>RUT Contribuyente</td>
      <td>RUT Contribuyente</td>
    </tr>
    <tr>
      <td><strong>Campo 3</strong></td>
      <td>N° Resolución</td>
      <td>N° Resolución</td>
      <td>N° Resolución</td>
      <td>N° Resolución</td>
      <td>N° Resolución</td>
    </tr>
    <tr>
      <td><strong>Campo 4</strong></td>
      <td>Unidad Regional</td>
      <td>Unidad Regional</td>
      <td>Unidad Regional</td>
      <td>Unidad Regional</td>
      <td>Unidad Regional</td>
    </tr>
  </tbody>
</table>

<h4 id="navegacion" class="mt-4">3.1.2 Navegación</h4>
<p>
  Para comenzar se describirán los componentes de las pantallas del Libro de resoluciones
  y la función que cumplirá cada uno. En el anexo <em>Pantalla principal</em> se muestra el detalle de las resoluciones.
</p>

<p class="fw-bold kb-color">Pantalla principal</p>
<p>
  En esta sección se definieron los campos respecto a la unificación entre la información de
  resoluciones provenientes del SGF y del Proceso Centralizado. Además, se definieron campos
  de estado para visualizar la etapa actual de resolución. Esta información se puede ver en
  el anexo <em>Resultados de búsqueda</em>.
</p>

<p>A continuación, se describen los valores de cada <em>campo de estado</em>:</p>


<ol>
  <li>
    <strong>Origen:</strong> Corresponde al aplicativo de donde proviene la resolución.
    Los valores del campo pueden ser:
    <ul>
      <li>SGF</li>
      <li>Proceso Centralizado</li>
    </ul>
  </li>


  <li>
    <strong>Estado Notificación:</strong> Este campo indica si la resolución está notificada
    o pendiente de notificar al contribuyente.
    <br>Se puede calcular considerando el campo
    <em>Fecha notificación Resolución</em>.
    <br>Condición:
    <ul>
      <li>Si existe fecha de notificación → retorna <strong>Notificada</strong>.</li>
      <li>En caso contrario → retorna <strong>Pendiente de notificar</strong>.</li>
    </ul>
  </li>

  <li>
    <strong>Estado SIAG:</strong> Este campo indica si existe una impugnación y en qué estado se encuentra.
    El valor de cada estado es el siguiente:
    <table class="table table-bordered mt-2">
      <thead>
        <tr><th>Estados</th></tr>
      </thead>
      <tbody>
        <tr><td>1ra Impugnación RAV en curso</td></tr>
        <tr><td>1ra Impugnación RAF en curso</td></tr>
        <tr><td>1ra Impugnación RAV finalizada</td></tr>
        <tr><td>1ra Impugnación RAF finalizada</td></tr>
        <tr><td>2da Impugnación RAF en curso</td></tr>
        <tr><td>2da Impugnación RAF finalizada</td></tr>
        <tr><td>xxx Impugnación RAF en curso</td></tr>
        <tr><td>xxx Impugnación RAF finalizada</td></tr>
      </tbody>
    </table>

  </li>
    <li>
    <strong>Estado E-Folder::</strong> Este campo indica si existe un reclamo y en qué etapa se encuentra. El nombre de cada estado se indica a continuación:
    <table class="table table-bordered mt-2">
  <thead>
    <tr>
      <th>Reclamo</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Reclamo TTA en curso</td></tr>
    <tr><td>Apelación Corte de Apelaciones en curso</td></tr>
    <tr><td>Apelación Corte Suprema en curso</td></tr>
    <tr><td>Reclamo TTA finalizada</td></tr>
    <tr><td>Apelación Corte de Apelaciones finalizada</td></tr>
    <tr><td>Apelación Corte Suprema finalizada</td></tr>
  </tbody>
</table>
  </li>
</ol>

<h4 id="pantalla-detalle" class="mt-4">3.1.3 Pantalla Detalle</h4>
<p>
  Al hacer clic en el botón <strong>“Detalle”</strong> indicado en el recuadro principal se debe desplegar
  una nueva pantalla que muestre la <strong>trazabilidad de las resoluciones</strong>, diferenciando si
  existe una impugnación o reclamo asociado. Esta pantalla se separa en tres recuadros:
</p>

<ul>
  <li><strong>Datos Resolución</strong></li>
  <li><strong>Impugnaciones</strong></li>
  <li><strong>Reclamos</strong></li>
</ul>

<p class="mb-2">
  <strong>Datos Resolución:</strong> Muestra los principales datos de la
  <em>resolución primitiva</em>.
</p>

<p class="mb-2">
  <strong>Impugnaciones:</strong> En esta sección se muestran los campos provenientes del
  aplicativo <strong>SIAG</strong> para aquellas resoluciones impugnadas (RAV o RAF). Además, se
  incluyen <em>campos de estado</em> que indican información adicional (ver ANEXO “Impugnaciones”).
</p>

<ol class="circle-list">
  <li>
    <strong>Estado:</strong> Indica si el reclamo está finalizado o no. Los valores posibles son:
    <ul>
      <li>En tramitación</li>
      <li>Cerrado</li>
    </ul>
  </li>
</ol>

<p class="mt-2">
  En caso de que el contribuyente realice una <strong>nueva impugnación</strong> como respuesta
  al resultado de la anterior, el sistema debe desplegar una <em>nueva línea</em> considerando
  la misma información de campos definida anteriormente.
</p>

<p class="mb-2">
  <strong>Reclamos:</strong> En esta sección se muestran los campos provenientes del aplicativo
  <strong>E‑Folder</strong> para reclamos tramitados ante el <strong>TTA</strong>, la
  <strong>Corte de Apelaciones</strong> y la <strong>Corte Suprema</strong>. También se incluyen
  <em>campos de estado</em> con información adicional (ver ANEXO “Reclamos”).
</p>

<!-- === 3.1.2 Navegación – secciones faltantes === -->

<p class="fw-bold kb-color">A continuación, se describen los valores de cada “campo de estado”:</p>

<ul>
  <li><strong>Estado:</strong> Indica si el Reclamo está finalizado o no. El nombre de cada valor del campo es el siguiente:
    <ul>
      <li>En tramitación</li>
      <li>Cerrado</li>
    </ul>
  </li>
</ul>

<p class="fw-bold kb-color">Menú desplegable</p>
<p>
  Se requiere agregar un menú que permita la navegación entre los distintos módulos del sistema.
  Estos módulos son los siguientes:
</p>
<ol>
  <li><strong>Inicio:</strong> Acceso a la pantalla principal de TAF Resoluciones.</li>
  <li><strong>Notificaciones:</strong> Despliega vista con notificaciones relevantes para cada regional.</li>
  <li><strong>Estadística:</strong> Despliega vista con estadística relevante para cada regional.</li>
  <li><strong>Ayuda:</strong> Material de ayuda enfocada a aprendizaje de la aplicación TAF Resoluciones.</li>
</ol>

<p class="fw-bold kb-color">Buscador de Resoluciones</p>
<p>
  En la parte superior de la pantalla principal del Libro de Resoluciones se visualizarán los filtros
  que ayudarán a mejorar la experiencia del usuario y permitir una búsqueda más precisa y eficiente de
  la trazabilidad de las resoluciones. En el ANEXO <em>“Buscador de Resoluciones”</em> se muestran los
  campos definidos.
</p>

<!-- === 3.2 Integración de los Sistemas === -->
<h4 id="integracion-sistemas" class="mt-4">3.2 Integración de los Sistemas</h4>
<p class="mt-4">
  Para realizar la integración de los sistemas se debe considerar traer la información de cada sistema
  que tiene relación con <strong>resoluciones</strong>. A continuación, se describen los sistemas que se
  anexarán al <em>Libro de Resoluciones</em>:
</p>

<div class="table-responsive">
  <table class="table table-bordered table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th>Aplicativo</th>
        <th>Integración</th>
        <th>Tabla</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>SGF</td>
        <td>SERVICIO REST</td>
        <td>Crear</td>
        <td>Ok</td>
      </tr>
      <tr>
        <td>ANCOFEA</td>
        <td>SERVICIO REST</td>
        <td>Crear</td>
        <td>Validar</td>
      </tr>
      <tr>
        <td>SIAG</td>
        <td>SERVICIO REST</td>
        <td>Crear</td>
        <td>Ok</td>
      </tr>
      <tr>
        <td>E‑Folder</td>
        <td>SERVICIO REST</td>
        <td>Crear</td>
        <td>Ok</td>
      </tr>
    </tbody>
  </table>
</div>
`;
