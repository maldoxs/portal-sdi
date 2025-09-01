//Taf-Resoluciones
import tafResolucionesRequerimiento from "../contents/taf-resoluciones/requerimiento.js";
import tafResolucionesRepositorioGit from "../contents/taf-resoluciones/repositorioGit.js";
import tafResolucionesModeloDatos from "../contents/taf-resoluciones/modeloDatos.js";
import tafResolucionesJirasAsociados from "../contents/taf-resoluciones/jirasAsociados.js";
import tafResolucionesAmbientes from "../contents/taf-resoluciones/ambientesBd.js";
import tafResolucionesUrlAmbientes from "../contents/taf-resoluciones/urlAmbientes.js";
import tafResolucionesFlujoProceso from "../contents/taf-resoluciones/flujoproceso.js";

export const articles = [
    // 10 artículos para "Mi Cuenta" con el contenido que proporcionaste
    {
        id: "how-to-create-an-account",
        title: "Cómo crear una cuenta",
        category: "my-account", // Usamos el slug correcto aquí
        excerpt:
            "Este es un artículo de ejemplo. Está destinado a demostrar algunos de los elementos clave de estilo de KnowAll, la base de conocimientos...",
        content: `
        <p>An stet rationibus instructior ius, id malis ignota imperdiet per, eos sapientem consequat cu. Integre assentior prodesset per no, omnes appareat in vim. Ea viris nominavi qualisque vel, nibh iisque et mei, in usu error admodum. Vis no dicam postea pertinacia, quo eu elitr intellegat, cum ferri maluisset iracundia ei. Ex dolor vivendum ius, veritus deserunt democritum no mea.</p>

        <h3>Paso 1: Empezar el proceso</h3>
        <p class="mt-4">Mei utinam nominavi id, molestiae forensibus adversarium est ei. Nisl dico imperdiet ex vim, et porro insolens instructior sed, sit ut eius sapientem vulputate.</p>
        <p>Usu nisl signiferumque te, agam omittam an mei. At ocurreret maiestatis ius, ferri mediocrem te vel, ad pro inciderint interpretaris. Est id wisi omnesque argumentum, te graece saperet eos. Mel dicunt electram scripserit at, ut purto sonet has. Nec te sale porro nobis.</p>

        <h3>Paso 2: Rellenar tus datos</h3>
        <div class="alert alert-warning d-flex align-items-center mt-4">
          <i class="bi bi-info-circle-fill me-2"></i>
          <div>
            <strong>Consejo rápido</strong>
            <p class="mb-0">Mensajes como este pueden usarse para resaltar puntos específicos.</p>
          </div>
        </div>
        <p>Mei utinam nominavi id, molestiae forensibus adversarium est ei. Nisl dico imperdiet ex vim, et porro insolens instructior sed, sit ut eius sapientem vulputate.</p>
        <p>Usu nisl signiferumque te, agam omittam an mei. At ocurreret maiestatis ius, ferri mediocrem te vel, ad pro inciderint interpretaris. Est id wisi omnesque argumentum, te graece saperet eos. Mel dicunt electram scripserit at, ut purto sonet has. Nec te sale porro nobis.</p>

        <h3>Paso 3: Verificar tu cuenta</h3>
        <p>Nisl dico imperdiet ex vim, et porro insolens instructior sed, sit ut eius sapientem vulputate.</p>
        <ol class="mt-4">
          <li class="mb-2">En la esquina superior derecha de la página de inicio, busca el ícono ⚙️ para encontrar la Configuración de la cuenta.</li>
          <li class="mb-2">Desde tu área de cuenta, ubica la pestaña de idioma.</li>
          <li class="mb-2">Selecciona un idioma para aplicarlo a tu cuenta.</li>
        </ol>
        <p>Eget nunc lobortis mattis aliquam faucibus purus. Vestibulum morbi blandit cursus risus at ultrices mi. Fermentum iaculis eu non diam. Dolor sed viverra ipsum nunc aliquet. Cras fermentum odio eu feugiat pretium nibh ipsum consequat.</p>

        <h3>Paso 4: Finalizar</h3>
        <p>Malesuada proin libero nunc consequat interdum varius sit amet. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Sem viverra aliquet eget sit amet. Enim ut sem viverra aliquet. Vitae turpis massa sed elementum tempus egestas sed sed risus. At lectus urna duis convallis convallis tellus.</p>
        <p>Fringilla est ullamcorper eget nulla facilisi etiam dignissim.</p>

        <h3>Paso 5: demo</h3>
        <p>Malesuada proin libero nunc consequat interdum varius sit amet. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Sem viverra aliquet eget sit amet. Enim ut sem viverra aliquet. Vitae turpis massa sed elementum tempus egestas sed sed risus. At lectus urna duis convallis convallis tellus.</p>
        <p>Fringilla est ullamcorper eget nulla facilisi etiam dignissim.</p>
         <p>Malesuada proin libero nunc consequat interdum varius sit amet. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Sem viverra aliquet eget sit amet. Enim ut sem viverra aliquet. Vitae turpis massa sed elementum tempus egestas sed sed risus. At lectus urna duis convallis convallis tellus.</p>
        <p>Fringilla est ullamcorper eget nulla facilisi etiam dignissim.</p>
         <p>Malesuada proin libero nunc consequat interdum varius sit amet. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Sem viverra aliquet eget sit amet. Enim ut sem viverra aliquet. Vitae turpis massa sed elementum tempus egestas sed sed risus. At lectus urna duis convallis convallis tellus.</p>
        <p>Fringilla est ullamcorper eget nulla facilisi etiam dignissim.</p>
         <p>Malesuada proin libero nunc consequat interdum varius sit amet. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Sem viverra aliquet eget sit amet. Enim ut sem viverra aliquet. Vitae turpis massa sed elementum tempus egestas sed sed risus. At lectus urna duis convallis convallis tellus.</p>
        <p>Fringilla est ullamcorper eget nulla facilisi etiam dignissim.</p>
         <p>Malesuada proin libero nunc consequat interdum varius sit amet. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Sem viverra aliquet eget sit amet. Enim ut sem viverra aliquet. Vitae turpis massa sed elementum tempus egestas sed sed risus. At lectus urna duis convallis convallis tellus.</p>
        <p>Fringilla est ullamcorper eget nulla facilisi etiam dignissim.</p>
         <p>Malesuada proin libero nunc consequat interdum varius sit amet. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Sem viverra aliquet eget sit amet. Enim ut sem viverra aliquet. Vitae turpis massa sed elementum tempus egestas sed sed risus. At lectus urna duis convallis convallis tellus.</p>
        <p>Fringilla est ullamcorper eget nulla facilisi etiam dignissim.</p>
         <p>Malesuada proin libero nunc consequat interdum varius sit amet. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Sem viverra aliquet eget sit amet. Enim ut sem viverra aliquet. Vitae turpis massa sed elementum tempus egestas sed sed risus. At lectus urna duis convallis convallis tellus.</p>
        <p>Fringilla est ullamcorper eget nulla facilisi etiam dignissim.</p>

        <h3>Paso 6: tabla</h3>
        <p>Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Diam in arcu cursus euismod. Diam vel quam elementum pulvinar etiam non quam lacus. Praesent semper feugiat nibh sed pulvinar proin.</p>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Nombre del idioma</th>
              <th scope="col">Código del idioma</th>
              <th scope="col">Código de configuración regional de WordPress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inglés</td>
              <td>en</td>
              <td>en_US</td>
            </tr>
            <tr>
              <td>Francés</td>
              <td>fr</td>
              <td>fr_FR</td>
            </tr>
            <tr>
              <td>Alemán</td>
              <td>de</td>
              <td>de_DE</td>
            </tr>
            <tr>
              <td>Español</td>
              <td>es</td>
              <td>es_ES</td>
            </tr>
            <tr>
              <td>Italiano</td>
              <td>it</td>
              <td>it_IT</td>
            </tr>
          </tbody>
        </table>
        <p>Dolor magna eget est lorem ipsum dolor sit amet consectetur. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Lectus quam id leo in.</p>
      `,
    },
    {
        id: "your-account-password",
        title: "Tu contraseña de cuenta",
        category: "my-account",
        excerpt: "Recomendaciones para tu contraseña.",
        content: `Contenido de "Tu contraseña de cuenta"...`,
    },
    {
        id: "delete-your-account",
        title: "Eliminar tu cuenta",
        category: "my-account",
        excerpt: "Proceso para eliminar tu cuenta.",
        content: `Contenido de "Eliminar tu cuenta"...`,
    },
    {
        id: "how-to-change-your-password",
        title: "Cómo cambiar tu contraseña",
        category: "my-account",
        excerpt: "Pasos para cambiar tu contraseña de forma segura.",
        content: "Contenido de 'Cómo cambiar tu contraseña'...",
    },
    {
        id: "edit-your-profile",
        title: "Editar tu perfil",
        category: "my-account",
        excerpt: "Actualiza tu información personal y foto de perfil.",
        content: "Contenido de 'Editar tu perfil'...",
    },
    {
        id: "edit-your-account-privacy",
        title: "Editar la privacidad de tu cuenta",
        category: "my-account",
        excerpt: "Configura quién puede ver tu información.",
        content: "Contenido de 'Editar la privacidad de tu cuenta'...",
    },
    {
        id: "how-to-enable-two-step-verification",
        title: "Cómo habilitar la verificación en dos pasos",
        category: "my-account",
        excerpt: "Añade una capa extra de seguridad a tu cuenta.",
        content: "Contenido de 'Cómo habilitar la verificación en dos pasos'...",
    },
    {
        id: "link-social-media-accounts",
        title: "Vincular cuentas de redes sociales",
        category: "my-account",
        excerpt: "Conecta tus redes sociales para un acceso más rápido.",
        content: "Contenido de 'Vincular cuentas de redes sociales'...",
    },
    {
        id: "manage-notifications",
        title: "Gestionar notificaciones",
        category: "my-account",
        excerpt: "Ajusta tus preferencias de notificaciones.",
        content: "Contenido de 'Gestionar notificaciones'...",
    },
    {
        id: "account-settings-overview",
        title: "Visión general de la configuración de la cuenta",
        category: "my-account",
        excerpt: "Un resumen de todas las opciones de configuración disponibles.",
        content: "Contenido de 'Visión general de la configuración de la cuenta'...",
    },
    // artículos Taf-Resoluciones
    {
        id: "tafResoluciones_requerimiento",
        title: "Requerimiento Taf-resoluciones",
        category: "taf-resoluciones",
        excerpt:
            "Documento que detalla el origen, objetivos y alcance funcional del sistema TAF-Resoluciones.",
        content: tafResolucionesRequerimiento,
    },
    {
        id: "tafResoluciones_repositorio-git",
        title: "Repositorio GIT",
        category: "taf-resoluciones",
        excerpt: "Aquí encontrarás todos los archivos y el código fuente del proyecto",
        content: tafResolucionesRepositorioGit,
    },
    {
        id: "tafResoluciones_modeloDatos",
        title: "Modelo de Datos ",
        category: "taf-resoluciones",
        excerpt:
            "Estructura de tablas y relaciones que soportan la trazabilidad de resoluciones, impugnaciones y reclamos en TAF-Resoluciones.",
        content: tafResolucionesModeloDatos,
    },
    {
        id: "tafResoluciones_jirasAsociados",
        title: "Jiras asociados",
        category: "taf-resoluciones",
        excerpt:
            "Listado de requerimientos y sub-tareas vinculadas al proyecto TAF-Resoluciones, utilizados para el control de avances, gestión de incidencias y coordinación entre equipos.",
        content: tafResolucionesJirasAsociados,
    },
    {
        id: "tafResoluciones_baseDatos",
        title: "Base de Datos del Sistema ",
        category: "taf-resoluciones",
        excerpt: "Bases de Datos de los distintos ambientes Desarrollo,Certificación y Producción.",
        content: tafResolucionesAmbientes,
    },
    {
        id: "tafResoluciones_Ambientes",
        title: "Ambientes de trabajo ",
        category: "taf-resoluciones",
        excerpt:
            "Detalles sobre los diferentes ambientes de trabajo: Desarrollo, Certificación y Producción ",
        content: tafResolucionesUrlAmbientes,
    },

    {
        id: "tafResoluciones_flujoProceso",
        title: "Flujo Proceso Taf-Resoluciones ",
        category: "taf-resoluciones",
        excerpt:
            "Busca solucionar las discrepancias de montos en resoluciones. Para ello, crea un modelo con trazabilidad completa que unifica los datos y rastrea cada resolución desde su origen hasta el resultado final.",
        content: tafResolucionesFlujoProceso,
    },

    // 2 artículos para "Facturación y pagos"
    {
        id: "billing-first-article",
        title: "Artículo de facturación 1",
        category: "billing-and-payments",
        excerpt: "Información sobre cómo se realizan los pagos.",
        content: "Contenido del artículo de facturación 1...",
    },
    {
        id: "billing-second-article",
        title: "Artículo de facturación 2",
        category: "billing-and-payments",
        excerpt: "Detalles sobre las facturas.",
        content: "Contenido del artículo de facturación 2...",
    },
    // 1 artículo para "Aplicación móvil"
    {
        id: "mobile-app-troubleshooting",
        title: "Solución de problemas en la app móvil",
        category: "mobile-app",
        excerpt: "Guía para resolver problemas comunes en la aplicación.",
        content: "Contenido del artículo de la app móvil...",
    },
    // 1 artículo para "Derechos de autor y aspectos legales"
    {
        id: "copyright-legal-info",
        title: "Información de derechos de autor",
        category: "copyright-and-legal",
        excerpt: "Detalles sobre las licencias y uso de contenido.",
        content: "Contenido del artículo legal...",
    },
    // 1 artículo para "Desarrolladores"
    {
        id: "developers-api-docs",
        title: "Documentación de la API",
        category: "developers",
        excerpt: "Guía completa para la integración de la API.",
        content: "Contenido del artículo de la API...",
    },
];

/*
Función: Almacena los datos de todos los artículos de la base de conocimientos.

Lógica: Es un simple archivo de exportación que contiene un array de objetos, donde cada objeto representa un artículo con su id, title, category, excerpt y content (en formato HTML).
Dependencias: Ninguna.
Observaciones: Sirve como la "base de datos" local de la aplicación.


*/
