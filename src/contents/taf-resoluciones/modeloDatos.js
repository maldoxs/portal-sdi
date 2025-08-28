export default `

<h4>Introducción</h4>
    <p class="mt-3">
      Este es el <strong>modelo de datos del nuevo sistema TAF-Resoluciones</strong>.
      Aquí se documentan las principales tablas y sus columnas con sus respectivas descripciones.
      El objetivo es entregar trazabilidad clara y unificada de los distintos campos provenientes
      de los aplicativos <em>SIAG</em>, <em>SGF</em> y <em>E-Folder</em>.
    </p>

        <div class="text-center my-4">
      <img src="/img/modelo_datos.png"
           alt="Modelo de resolución actual"
           style="max-width: 100%; height: auto;" />
      <p class="text-muted mt-2"><em>Ilustración 2. Modelo de Datos</em></p>
    </div>

    <h4 class="mt-4">Tabla SGFTR_IMPUGNACION_RES_SIAG_RAW</h4>
    <p class="mt-2">A continuación se listan los campos y sus descripciones:</p>

    <div class="table-responsive mb-4">
      <table class="table table-bordered table-sm align-middle">
        <thead class="table-light">
          <tr>
            <th scope="col">Campo</th>
            <th scope="col">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>IMRW_ID</td><td>Clave primaria de la resolución (en SGFTR)</td></tr>
          <tr><td>RAF_NUMERO_RAF</td><td>Identificador del caso/RAF. (Campo directo que proviene de tabla RAF de SIAG). Secuencia única para todas las D.R. y PK en SIAG.</td></tr>
          <tr><td>RES_FOLIO</td><td>Folio de la resolución en SIAG (correlativo del detalle de la solicitud de RAF de Resolución).</td></tr>
          <tr><td>RES_NUM_RESOLUCION</td><td>Número de la resolución asociada.</td></tr>
          <tr><td>IMRW_RAF_TIPO_SOLICITUD</td><td>Origen de la solicitud (Internet / Intranet / RAF-antigua). Interpretado desde SIAG.</td></tr>
          <tr><td>RAF_DIRECCION_REGIONAL</td><td>Código numérico de la dirección regional asociada.</td></tr>
          <tr><td>IMRW_RAF_DIRECCION_REGIONAL_DESC</td><td>Nombre de la Regional asociado al código RAF_DIRECCION_REGIONAL.</td></tr>
          <tr><td>RAF_RUT_CONTRIBUYENTE</td><td>RUT numérico del contribuyente que presenta la impugnación.</td></tr>
          <tr><td>RAF_DV_CONTRIBUYENTE</td><td>Dígito verificador del contribuyente.</td></tr>
          <tr><td>RES_MONTO_REVISAR</td><td>Monto que se revisará según lo pedido por el solicitante (SIAG).</td></tr>
          <tr><td>RES_CODIGO_MONEDA</td><td>Código de moneda usado en la resolución (ej. CLP, USD).</td></tr>
          <tr><td>IMRW_PAR_RES_DECISION_RAF</td><td>Decisión RAF (Ha Lugar, Ha Lugar en Parte, No Ha Lugar). Interpretado desde SIAG.</td></tr>
          <tr><td>IMRW_PAR_RESULTADO_FINAL_RAF</td><td>Resultado Final de la RAF: HL, HLP, NHL, Inadmisible, Inhabilitación, Desistimiento, Silencio Administrativo.</td></tr>
          <tr><td>RES_FECHA_NOTIFICACION</td><td>Fecha en que se notificó la resolución (SIAG).</td></tr>
          <tr><td>RES_FECHA_RESOLUCION</td><td>Fecha de la resolución (SIAG).</td></tr>
          <tr><td>RAF_FECHA_PRESENTACION</td><td>Fecha en que se presentó formalmente la impugnación (SIAG).</td></tr>
          <tr><td>RAF_FECHA_FIN_RAF</td><td>Fecha en que terminó el proceso RAF (SIAG).</td></tr>
          <tr><td>RAF_FECHA_CREACION_EXPEDIENTE</td><td>Fecha de creación del expediente RAF en SIAG.</td></tr>
          <tr><td>RAF_FECHA_EMITIR_INFORME</td><td>Fecha en que se debe emitir el informe de RAF (SIAG).</td></tr>
          <tr><td>RES_ESTADO</td><td>Código de estado: C = Curso, F = Finalizado, X = Anulado.</td></tr>
          <tr><td>IMRW_RES_ESTADO_DESC</td><td>Descripción del estado en que se encuentra (interpretado desde SIAG).</td></tr>
          <tr><td>RAF_ETAPA</td><td>Código de la etapa RAF (C, F, X). Estado de la solicitud en SIAG.</td></tr>
          <tr><td>IMRW_RAF_ETAPA_DESC</td><td>Descripción de la etapa en que se encuentra.</td></tr>
          <tr><td>PAR_RESULTADO_FINAL_RAF</td><td>Valor numérico original del resultado final RAF (1–7). Interpretado desde SIAG.</td></tr>
          <tr><td>IMRW_PAR_RESULTADO_FINAL_RAF_DESC</td><td>Descripción del resultado final RAF en que se encuentra (ej. HL, NHL, Inadmisible).</td></tr>
          <tr><td>IMRW_NRO_RECLAMO</td><td>Identificador único del reclamo extraído de eFolder.</td></tr>
        </tbody>
      </table>
    </div>
    <h4 class="mt-5">Tabla SGFTR_RECLAMOS_RES_EFOLDER_RAW</h4>
<p class="mt-2">
  Campos y descripciones provenientes de <strong>eFolder</strong> (RAW) para documentar el estado del reclamo en la instancia vigente.
</p>

<div class="table-responsive mb-4">
  <table class="table table-bordered table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th scope="col">Campo</th>
        <th scope="col">Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>RCRW_ID</td><td>ID del Reclamo (RAW) en el contexto de SGFTR.</td></tr>
      <tr><td>AR_DE01_RUT_CONTRIBUYENTE</td><td>RUT numérico del contribuyente. [eFolder: re01_ActosReclamados.de01_RutContribuyente]</td></tr>
      <tr><td>AR_DE01_RUT_CONTRIBUYENTE_DV</td><td>Dígito verificador del RUT. [eFolder: re01_ActosReclamados.de01_RutContribuyenteDV]</td></tr>
      <tr><td>AR_RE01_NACTO</td><td>Número de acto (número de reclamo) dentro de la carpeta. [eFolder: re01_ActosReclamados.re01_Nacto]</td></tr>
      <tr><td>RCRW_ABOGADO_PATROCINANTE023</td><td>Abogado patrocinante de la instancia vigente (1ª/2ª/3ª). Regla: si existe 1ª usa <code>de01_AbogadoPatrocinante</code>; si no, 2ª → <code>de01_AbogadoPatrocinante2da</code>; si no, 3ª → <code>de01_AbogadoPatrocinante3era</code>. [eFolder: de01_JTC]</td></tr>
      <tr><td>T14_MN05_MOTIVO</td><td>Motivo: DIFERENCIA DE CRITERIO, NO APLICA, NUEVOS ANTECEDENTES (solo 1ª instancia). [eFolder: mn05_Motivo.mn05_Motivo]</td></tr>
      <tr><td>RCRW_DE01_MONTO_SENTENCIA023</td><td>Monto de la sentencia de la instancia vigente (primer valor &gt; 0 entre 1ª/2ª/3ª). [eFolder: de01_JTC.de01_MontoSentencia023]</td></tr>
      <tr><td>T0_DE01_RIT</td><td>Rol Interno del Tribunal (identificación de causa). [eFolder: de01_JTC.de01_Rit]</td></tr>
      <tr><td>T0_DE01_RUC</td><td>Rol Único de Causa. [eFolder: de01_JTC.de01_RUC]</td></tr>
      <tr><td>RCRW_ROL</td><td>Rol procesal vigente (1ª/2ª/3ª). Regla: usa <code>de01_Rol</code> si ≠ ‘0-0’ y los demás son ‘0-0’; si no, usa 2ª; si no, 3ª. [eFolder: de01_JTC.de01_Rol023]</td></tr>
      <tr><td>RCRW_ROL_CA</td><td>Rol en Corte de Apelaciones. [eFolder: fuente CA]</td></tr>
      <tr><td>RCRW_ROL_CS</td><td>Rol en Corte Suprema. [eFolder: fuente CS]</td></tr>
      <tr><td>T19_MN02_NOMBRE_TRIBUNAL</td><td>Nombre del tribunal asociado al expediente. [eFolder: mn02_Tribunal.mn02_Nombre]</td></tr>
      <tr><td>RCRW_FECHA_SENTENCIA123</td><td>Fecha de sentencia vigente (toma la mayor entre 1ª/2ª/3ª). [eFolder: de01_JTC.de01_FechaSentencia123]</td></tr>
      <tr><td>T16_MN18_DESCRIPCION_ESTADO</td><td>Actividad/estado del workflow (EVALUACIÓN, REGISTRO DE CAUSA, ASIGNACIÓN, etc.). [eFolder: mn18_ActividadWorkflowJTC.mn18_Descripcion]</td></tr>
      <tr><td>RCRW_ETAPA</td><td>Instancia procesal (Primera/Segunda/Tercera). Se obtiene por descripción del workflow y/o existencia de roles. [eFolder: mn18_ActividadWorkflowJTC / de01_Rol23]</td></tr>
      <tr><td>RCRW_DECISION_SENTENCIA</td><td>Tipo de decisión judicial de la sentencia vigente (1ª/2ª/3ª). [eFolder: mn08_DecisiondeSentencia.mn08_Tipo]</td></tr>
      <tr><td>T0_DE01_SN1_FECHA_NOTIFICACION</td><td>Fecha de notificación de la sentencia. [eFolder: de01_JTC.de01_SN1_FechaNotificacion]</td></tr>
      <tr><td>T0_EFOLDER_KEY_NRO_CARPETA</td><td>Identificador de carpeta/expediente en eFolder. [eFolder: de01_JTC.eFolderKey]</td></tr>
      <tr><td>RCRW_FECHA_INTERPOSICION23</td><td>Fecha de interposición (toma la mayor entre 2ª/3ª). [eFolder: de01_JTC.de01_FechaInterposicion23]</td></tr>
      <tr><td>RCRW_RESULTADO_SENTENCIA</td><td>Resultado de la sentencia en la instancia activa (1ª/2ª/3ª). [eFolder: mn09_ResultadoSentencia.mn09_Tipo]</td></tr>
      <tr><td>T0_DE01_TOTAL_MONTO_ACTO_RECLAMADO</td><td>Monto total reclamado en el acto (suma de conceptos impugnados). [eFolder: de01_JTC.de01_TotalMontoActoRec]</td></tr>
      <tr><td>AR_CREATED_DATE</td><td>Fecha de creación del registro de reclamo en eFolder. [eFolder: re01_ActosReclamados.CreatedDate]</td></tr>
      <tr><td>AR_UPDATED_DATE</td><td>Fecha de última modificación del reclamo. [eFolder: re01_ActosReclamados.UpdatedDate]</td></tr>
      <tr><td>AR_DELETED_DATE</td><td>Fecha de eliminación lógica del reclamo. [eFolder: re01_ActosReclamados.DeletedDate]</td></tr>
      <tr><td>RCRW_NRO_RECLAMO</td><td>Identificador único del reclamo (PK en re01_ActosReclamados).</td></tr>
    </tbody>
  </table>
</div>
<h4 class="mt-5">Tabla SGFTR_CDC_EVENT_ADAPTER_MSG</h4>
<p class="mt-2">
  Esta tabla almacena los <strong>mensajes capturados desde la cola</strong> en formato RAW, junto con su estado de procesamiento
  y detalles adicionales que permiten depuración en caso de error.
</p>

<div class="table-responsive mb-4">
  <table class="table table-bordered table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th scope="col">Campo</th>
        <th scope="col">Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>EVMS_MSG_ID</td><td>Identificador único del mensaje (PK).</td></tr>
      <tr><td>EVMS_MSG_TEXT</td><td>Payload del mensaje en RAW capturado desde la cola. Contiene el texto completo del mensaje JSON recibido.</td></tr>
      <tr><td>EVMS_STATUS</td><td>Estado del procesamiento (<code>OK</code>, <code>ERROR</code>). Si el mensaje no cumple con el esquema podría generar errores de procesamiento. Aquí se almacena la información que indica la correctitud del procesamiento.</td></tr>
      <tr><td>EVMS_EXTRA_INFO</td><td>Información adicional (útil para debugging). Puede generarse en caso de error de procesamiento, permitiendo depurar la resolución del problema.</td></tr>
    </tbody>
  </table>
</div>

<h4 class="mt-5">Tabla SGFTR_CDC_EVENT_ADAPTER</h4>
<p class="mt-2">
  Esta tabla almacena los <strong>eventos capturados por Change Data Capture (CDC)</strong>
  en el sistema SGF. Cada modificación en una tabla de origen se descompone en registros individuales
  que permiten rastrear con precisión el valor nuevo y el valor anterior de la columna afectada.
</p>

<div class="table-responsive mb-4">
  <table class="table table-bordered table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th scope="col">Campo</th>
        <th scope="col">Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>EVAD_ID_TRX</td><td>Identificador único del registro/auditoría (clave primaria).</td></tr>
      <tr><td>EVAD_ID</td><td>Identificador del evento CDC original (generado por el productor). No es único, ya que un evento puede contener varias columnas y aquí se separan en registros. Correlaciona con MSG.</td></tr>
      <tr><td>EVAD_TIMESTAMP</td><td>Marca de tiempo (con zona horaria) en que se produce el cambio. Corresponde al momento en que se activa el trigger en SGF y se envía a la cola.</td></tr>
      <tr><td>EVAD_SCHEMA_NAME</td><td>Nombre del esquema de la base de datos donde ocurrió el cambio en SGF. Información capturada por el trigger e incorporada en la cola.</td></tr>
      <tr><td>EVAD_TABLE_NAME</td><td>Nombre de la tabla modificada en SGF (ejemplo: <code>MGF_ATENCIONES</code>, <code>MGF_VALOR_ATENCION</code>).</td></tr>
      <tr><td>EVAD_COLUMN_NAME</td><td>Nombre de la columna modificada en SGF (ejemplo: <code>STAT_COD</code>, <code>VATN_VALOR</code>).</td></tr>
      <tr><td>EVAD_COLUMN_TYPE</td><td>Tipo de dato de la columna modificada en SGF (Long, String, Date, etc.).</td></tr>
      <tr><td>EVAD_COLUMN_VALUE</td><td>Valor NUEVO de la columna después del cambio.</td></tr>
      <tr><td>EVAD_COLUMN_VALUE_OLD</td><td>Valor ANTERIOR de la columna antes del cambio.</td></tr>
    </tbody>
  </table>
</div>

<h4 class="mt-5">Tabla SGFTR_IMPUGNACION_RES</h4>
<p class="mt-2">
  Esta tabla registra la información de las <strong>impugnaciones</strong> asociadas a las resoluciones
  (RAF/RAV) en el sistema SGFTR. Permite identificar al contribuyente, el tipo de solicitud, los montos
  involucrados y el resultado del proceso.
</p>

<div class="table-responsive mb-4">
  <table class="table table-bordered table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th scope="col">Campo</th>
        <th scope="col">Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>IMPG_ID</td><td>Id de la impugnación.</td></tr>
      <tr><td>RESO_ID</td><td>Id de la resolución (proviene de tabla RES).</td></tr>
      <tr><td>IMPG_NRO_CASO</td><td>Número del caso SGF.</td></tr>
      <tr><td>IMPG_NRO_IMPUGNACION</td><td>Número de impugnación.</td></tr>
      <tr><td>IMPG_RUT_CNTR</td><td>RUT del contribuyente.</td></tr>
      <tr><td>IMPG_DV_CNTR</td><td>Dígito verificador del RUT del contribuyente.</td></tr>
      <tr><td>IMPG_NOMBRE_CNTR</td><td>Nombre del contribuyente.</td></tr>
      <tr><td>IMPG_TIPO_SOLICITUD</td><td>Tipo de solicitud (RAF/RAV). Valores posibles: RAF (Revisión de Actuación Fiscalizadora) / RAV (Reposición Administrativa Voluntaria).</td></tr>
      <tr><td>IMPG_MONTO_HL</td><td>Monto final a devolver (Monto “Ha Lugar”).</td></tr>
      <tr><td>IMPG_FCH_INGRESO</td><td>Fecha de presentación de la declaración. Fecha de inclusión de la impugnación.</td></tr>
      <tr><td>IMPG_RESULTADO</td><td>Resultado del proceso de impugnación. Valores posibles: HLP (Ha Lugar en Parte), HL (Ha Lugar), NHL (No Ha Lugar).</td></tr>
      <tr><td>IMPG_FCH_RESULTADO</td><td>Fecha de emisión del resultado final (cuando se determina HL, NHL, HLP).</td></tr>
      <tr><td>IMPG_ESTADO_CASO</td><td>Estado del caso. Valores posibles: <br>
        – 1: En curso<br>
        – 2: Terminado<br>
        – 3: Anulado<br>
        – 1ra Impugnación RAV En curso<br>
        – 1ra Impugnación RAF En curso<br>
        – 1ra Impugnación RAV Finalizada<br>
        – 1ra Impugnación RAF Finalizada<br>
        – 2da Impugnación RAF En curso<br>
        – 2da Impugnación RAF Finalizada<br>
        – xxx Impugnación RAF En curso<br>
        – xxx Impugnación RAF Finalizada
      </td></tr>
    </tbody>
  </table>
</div>

<h4 class="mt-5">Tabla SGFTR_RECLAMOS_RES</h4>
<p class="mt-2">
  Esta tabla almacena los <strong>reclamos</strong> asociados a las resoluciones en el sistema SGFTR.
  Permite registrar la interposición del reclamo por parte del contribuyente, el monto reclamado,
  el estado del proceso y las decisiones de los distintos tribunales (TTA, Corte de Apelaciones, Corte Suprema).
</p>

<div class="table-responsive mb-4">
  <table class="table table-bordered table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th scope="col">Campo</th>
        <th scope="col">Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>RCMS_ID</td><td>Id del reclamo (Nro de reclamo).</td></tr>
      <tr><td>RESO_ID</td><td>Id de la resolución (proviene de tabla RES).</td></tr>
      <tr><td>RCMS_NRO_RECL</td><td>Número del reclamo.</td></tr>
      <tr><td>RCMS_NRO_CARPETA</td><td>Número asignado al crearse el caso en E-Folder.</td></tr>
      <tr><td>RCMS_FCH_RECLAMO</td><td>Fecha de ingreso/interposición del reclamo por parte del contribuyente.</td></tr>
      <tr><td>RCMS_ESTADO</td><td>Estado del reclamo. Valores posibles: <br>
        – Reclamo TTA en curso<br>
        – Apelación Corte de Apelaciones en curso<br>
        – Apelación Corte Suprema en curso<br>
        – Reclamo TTA finalizada<br>
        – Apelación Corte de Apelaciones finalizada<br>
        – Apelación Corte Suprema finalizada</td></tr>
      <tr><td>RCMS_MOTIVO</td><td>Motivo por el que se ingresa el reclamo.</td></tr>
      <tr><td>RCMS_MONTO</td><td>Monto reclamado por el contribuyente.</td></tr>
      <tr><td>RCMS_MONTO_HL</td><td>Monto autorizado a devolver por el TTA o alguna corte.</td></tr>
      <tr><td>RCMS_RIT</td><td>Número de individualización de causa en el TTA (Rol Interno del Tribunal).</td></tr>
      <tr><td>RCMS_RUC</td><td>Número de individualización de causa en el TTA (Rol Único de la Causa).</td></tr>
      <tr><td>RCMS_ROL</td><td>Identificador generado por la Corte de Apelaciones o Corte Suprema.</td></tr>
      <tr><td>RCMS_ABOGADO</td><td>Abogado del SII que ingresa el reclamo en E-Folder.</td></tr>
      <tr><td>RCMS_TRIBUNAL</td><td>Nombre del tribunal que lleva o llevó el reclamo.</td></tr>
      <tr><td>RCMS_ETAPA</td><td>Etapa en la que se encuentra el reclamo: TTA, Apelaciones, Suprema.</td></tr>
      <tr><td>RCMS_DECISION_SENTENCIA</td><td>Decisión del tribunal: Ha Lugar (HL), Ha Lugar en Parte (HLP), No Ha Lugar (NHL).</td></tr>
      <tr><td>RCMS_RESULTADO_SENTENCIA</td><td>Resultado en contexto SII: Favorable o No Favorable. Ejemplo: si la decisión es “No Ha Lugar”, el resultado es Favorable para el SII.</td></tr>
      <tr><td>RCMS_FCH_SENTENCIA</td><td>Fecha en que se da a conocer la sentencia.</td></tr>
      <tr><td>RCMS_FCH_NOTIF_SENTENCIA</td><td>Fecha en que se notifica la sentencia al contribuyente.</td></tr>
    </tbody>
  </table>
</div>

<h4 class="mt-5">Tabla SGFTR_RESOLUCIONES</h4>
<p class="mt-2">
  Esta tabla contiene la información principal de las <strong>resoluciones emitidas</strong>
  en el sistema SGFTR. Incluye datos del contribuyente, tipo de resolución, proceso de fiscalización,
  montos asociados, fechas relevantes y el estado de notificación, impugnación e instancias de reclamo.
</p>

<div class="table-responsive mb-4">
  <table class="table table-bordered table-sm align-middle">
    <thead class="table-light">
      <tr>
        <th scope="col">Campo</th>
        <th scope="col">Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>RESO_ID</td><td>Identificador único de resoluciones. Se alimenta con la secuencia <code>SGFTR_RESOLUCIONES_SEQ</code>.</td></tr>
      <tr><td>RESO_NRO</td><td>Número de la resolución (no necesariamente único).</td></tr>
      <tr><td>RESO_NRO_CASO_SGF</td><td>Número del caso en SGF (para resoluciones masivas no existe).</td></tr>
      <tr><td>RESO_NRO_ATN_SGF</td><td>Correlativo de la atención en SGF (<code>ATN_CORR</code>, sólo para resoluciones selectivas).</td></tr>
      <tr><td>RESO_NOMBRE_DR</td><td>Nombre de la Dirección Regional (DR) que emite la resolución.</td></tr>
      <tr><td>RESO_UOPV_CODIGO</td><td>Código de la Regional o Unidad Operativa.</td></tr>
      <tr><td>RESO_ORIGEN</td><td>Origen de la resolución. Valores posibles: SGF, Proceso Centralizado.</td></tr>
      <tr><td>RESO_TIPO</td><td>Tipo de resolución: Masiva o Selectiva.</td></tr>
      <tr><td>RESO_RUT_CNTR</td><td>RUT del contribuyente.</td></tr>
      <tr><td>RESO_DV_CNTR</td><td>Dígito verificador del contribuyente.</td></tr>
      <tr><td>RESO_NOMBRE_CNTR</td><td>Nombre completo del contribuyente o razón social.</td></tr>
      <tr><td>RESO_MONTO</td><td>Monto de la resolución (se obtiene de SGF <code>CATN_CODIGO = 931</code> de la resolución, proveniente de trigger asociado a <code>MGF_ATENCIONES</code>). Corresponde al monto reclamado.</td></tr>
      <tr><td>RESO_TIPO_PROCESO</td><td>Tipo de proceso de fiscalización. Valores posibles: Rev Riesgo, Rev Cumplimiento, Auditoría.</td></tr>
      <tr><td>RESO_FCH_EMISION</td><td>Fecha de emisión de la resolución.</td></tr>
      <tr><td>RESO_ESTADO_NOTIFICACION</td><td>Estado de notificación al contribuyente. Se calcula en base al campo “Fecha notificación Resolución”:<br>
        – Si existe fecha → Notificada<br>
        – Si no existe → Pendiente de notificar</td></tr>
      <tr><td>RESO_FCH_NOTIFICACION</td><td>Fecha en que se notificó la resolución al contribuyente.</td></tr>
      <tr><td>RESO_ESTADO_SIAG</td><td>Estado de impugnación en SIAG. Valores posibles: En tramitación, Cerrado, 1ra Impugnación RAV/RAF en curso o finalizada, 2da Impugnación RAF en curso o finalizada, XX Impugnación RAF en curso o finalizada.</td></tr>
      <tr><td>RESO_ESTADO_EFOLDER</td><td>Estado de reclamos en TTA (E-Folder). Indica si existe un reclamo y en qué etapa se encuentra.<br>
        Valores posibles: En tramitación, Cerrado, Reclamo TTA en curso/finalizada, Apelación Corte de Apelaciones en curso/finalizada, Apelación Corte Suprema en curso/finalizada.</td></tr>
      <tr><td>RESO_NRO_CITACION</td><td>Número de citación asociado. Puede contener números y caracteres. Existe la opción “Sin Citaciones”.</td></tr>
      <tr><td>RESO_RUT_FNCR</td><td>RUT del funcionario fiscalizador.</td></tr>
      <tr><td>RESO_DV_FNCR</td><td>Dígito verificador del RUT del funcionario fiscalizador.</td></tr>
      <tr><td>RESO_NRO_ATN_SGF</td><td>(Repetido en fuente original; corresponde al correlativo de atención en SGF para resoluciones selectivas).</td></tr>
    </tbody>
  </table>
</div>










`;
