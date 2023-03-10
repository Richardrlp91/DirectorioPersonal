var text_agora=`
<h4 class="h4">Observaciones Agora Plus</h4>
      <p class=""><b>Sin acceso a OMI desde SELENE:</b>
      <ul class="lista">
        <li class="">Revisar que login sea igual. user con rol Fac. o Enf. en M3, misma categoria de acceso.</li>
        <li class="">Verificar si puede acceder directamente https://www.sms.carm.es/agora</li>
        <li class="">En caso de que no. Tomar datos de user y escalar a Grupo de Soporte SGTI - Agora Plus.</li>
      </ul>
      </p>
      <p class=""><b>Datos diferentes en rol de Fac. que con el Enf.</b>
        <ul class="lista">
          <li class="">Cada rol ve diferente información. Contactar con el coord. del user para que escale y remita a asistencia Sanitaria.</li>
        </ul>
      </p>
      <p class=""><b>Veo datos distintos de un paciente a partir de las 15:00</b>
        <ul class="lista">
          <li class="">la app toma la info que muestra de L-V de 8.00 a 15.00 de un repositorio central y despues, del repositorio local del centro.</li>
        </ul>
      </p>
      <p class=""><b> Error al abrir informe, PDF corrupto</b>
        <ul class="lista">
          <li class="">tienen otro informe abierto en segundo plano y la aplicación no te permite tener 2 abiertos a la misma vez.</li>
        </ul>
      </p>
      <p class=""><b>Informes que no se ven bien o no se ven</b>
        <ul class="lista">
          <li class="">tienen otro informe abierto en segundo plano y la aplicación no te permite tener 2 abiertos a la misma vez.</li>
        </ul>
      </p>
      <p class=""><b>No es posible volver a OMI.</b>
        <ul class="lista">
          <li class="">deben cerrar esa ventana de informe previamente, de lo contrario no es posible recuperar el control de OMI.</li>
        </ul>
      </p>
      <p class=""><b>No encuentran un paciente en Ágora Plus</b>
        <ul class="lista">
          <li class="">Comprobar conexión con Civitas, ver si esta dado de alta ahí y si coinciden los datos.</li>
          <li class="">Si no existe en Civitas, Remitir user al Servicio Regional de Tarjeta Sanitaria.</li>
          <li class="">Si paciente existe en Civitas y no aparece en Agora, escalar al Grupo de Soporte SGTI Ágora Plus.</li>
        </ul>
      </p>
      <p class=""><b>No muestra la HC de un paciente</b>
        <ul class="lista">
          <li class="">Buscar en su OMI y comprobar si tiene historia, igual en SELENE. si no esta avisar al paciente y cerrar incidencia.</li>
          <li class="">Si tiene HC y no aparece, escalar a Grupo de Soporte SGTI Ágora Plus.</li>
        </ul>
      </p>
      <p class=""><b>Datos erroneos en HC</b>
        <ul class="lista">
          <li class="">Error en ingreso de datos. Tomar datos del paciente y escalar a Grupo de Soporte SGTI Ágora Plus.</li>
        </ul>
      </p>
      <p class=""><b>No aparece vacunación de un paciente</b>
        <ul class="lista">
          <li class="">El centro debe enviar un correo a la lista vacunas.covid@carm.es</li>
        </ul>
      </p>
      <p class=""><b>Falta de datos en HC</b>
        <ul class="lista">
          <li class="">ver datos de paciente en Selene(name, f/nac. y CIP_SNS)que coincidan con CIVITAS, si no, no se actualizará la info. de SELENE en ÁGORA PLUS.</li>
          <li class="">se deberá contactar con Archivo del hospital para que actualicen dichos datos en la HC del paciente en Selene.</li>

        </ul>
      </p>
`;

var text_selene=`
<h4 class="h4">Observaciones SELENE</h4>
      <p class="parrafo">El catálogo de perfiles de Selene no contempla permisos para un/a enfermero/a del C.S. Murcia/Alquerias en Selene HUVA. Si necesita acceso deberá de solicitarlo a Dirección Médica de su Gerencia.</p>  
      <p class="parrafo">Se han modificado los permisos del usuario: ${textUser}, tal y como los tiene el usuario de referencia.</p>  
      <h4 class="h4">CIAS SELENE</h4>
      <p class="parrafo">El catálogo de perfiles de Selene no contempla permisos para un/a enfermero/a del C.S. Murcia/Alquerias en Selene HUVA. Si necesita acceso deberá de solicitarlo a Dirección Médica de su Gerencia.</p>  
      <p class=""><b>Ya tiene CIAS: </b>El usuario ${textUser} tiene un Nº de colegiado relleno en Selene.</p>
      <p class=""><b>Ya tiene CIAS: </b>El usuario ${textUser} tiene un CIAS relleno en Selene perteneciente al área en la que está realizando la prescripción.<br> Para saber si el CIAS que está utilizando es correcto, las 5 primeras cifras han de coincidir con las de su área:
      </p>
      <p class=""><b>Listado de CIAS:</b>
      <ul class="lista">
        <li class=""><b>H Virgen de la Arrixaca: </b>08019</li>
        <li class=""><b>H Santa Lucía y H SM del Rosell: </b>08029</li>
        <li class=""><b>H Rafael Méndez: </b>08039</li>
        <li class=""><b>H Comarcal NO: </b>08017</li>
        <li class=""><b>H Virgen del Castillo: </b>08059</li>
        <li class=""><b>H Morales Meseguer: </b>08016</li>
        <li class=""><b>H Reina Sofía: </b>08018</li>
        <li class=""><b>H Los Arcos MM: </b>08028</li>
        <li class=""><b>H La Vega Lorenzo Guirao: </b>08068</li>
        <li class=""><b>H Psiquiátrico Román Alberca: </b>08099</li>
        <p>En caso de que no coincida, han de cambiárselo por un CIAS genérico según el área, a saber.</p>
        <li class=""><b>H Virgen de la Arrixaca: </b>0801905099W</li>
        <li class=""><b>H Santa Lucía y H SM del Rosell: </b>0802905099P</li>
        <li class=""><b>H Rafael Méndez: </b>0803905099Z</li>
        <li class=""><b>H Comarcal NO: </b>0801705099X</li>
        <li class=""><b>H Virgen del Castillo: </b>0805905099A</li>
        <li class=""><b>H Morales Meseguer: </b>0801605099Z</li>
        <li class=""><b>H Reina Sofía: </b>0801805099Y</li>
        <li class=""><b>H Los Arcos MM: </b>0802805099N</li>
        <li class=""><b>H La Vega Lorenzo Guirao: </b>0806805099J</li>
        <li class=""><b>H Psiquiátrico Román Alberca: </b>0809905099G</li>
      </ul>
      </p>

`;
var text_remedy=`
<h4 class="h4">Observaciones Remedy</h4>
<ul class="lista">
  <li>Se han modificado los permisos del usuario ${inputUser}: tal y como los tiene el usuario de referencia:${inputRef}</li>
  <li>Se ha procedido a realizar la petición solicitada, todos los usuarios se encuentran como se ha solicitado a excepción de:...que no se ha encontrado en el sistema.</li>
  <p class="bold">Resolución</p>
  <li>Tras la revisión de su petición se ha procedido a la tramitación de la misma, ya está disponible en la web. </li>
</ul>
`;
var text_so=`
<h4 class="h4">Altas Sistema Operativo</h4>
      <ul class="lista">
        <li>Se da de alta en Figesper, AD, Control de accesos.</li>
        <li>Portal autoprovisión, verificar codigo de ubicación, quitar check en <b>No borrar grupos</b>, validar Captcha y guardar.</li>
      </ul>
`;

var text_correo=`
<h4 class="h4">Observaciones CORREO</h4>
          <p class="parrafo">Buenos días, para acceder al nuevo correo CARM se hace a través de la URL: https://outlook.office365.com/owa/carm.es Usuario: login@ad.sms.carm.es Contraseña: La establecida con la aplicación NEMO. Un saludo.
          </p>  
      <h4 class="h4">Alta en Correo SMS</h4>
        <ul class="lista">
          <li>Se verifica el usuario en FIGESPER, ACCESOS e IDECRI.</li>
          <li>Se añade el usuario al excel "Altas correo office 365 (03-08-2022)".</li>
          <li>Se solicita alta en CORREO.</li>
          <p class="bold">Remedy</p>
          <li>grupo asignado: Casos Pendientes</li>
          <li>Usuario asignado: Usuario Pendiente.</li>
          <li>Estado: asignado y Guardar.</li>
          <p class="bold">Ahora se entra de nuevo a la Incidencia y modificar: </p>
          <li>Estado:PENDIENTE</li>
          <li>Motivo del Estado: Acc. neces. de proveedor externo.</li>
        </ul>
      <h4 class="h4">Alta en Correo Soporte</h4>
        <ul class="lista">
          <li>Buenos días, atendiendo a su petición, se esta tramitando el alta del usuario en la incidencia ${inputInc}.
            Muchas gracias por su tiempo, Saludos 👋</li>
          <li>Se añade el usuario al excel "Altas correo office 365 (03-08-2022)".</li>
          
        </ul>

`;
var text_figesper=`
<h4 class="h4">Figesper</h4>
<ul class="lista">
  <p class="bold">Nuevo Usuario</p>
  <li class="d-inline"><b>Ads presupuestaria: </b>1810411a</li>
  <li class="d-inline"><b>Ads organica: </b>586</li>
  <li class="d-inline"><b>Centro de trabajo: </b></Ads>00019</li>
  <li class="d-inline"><b>Descripción: </b>SERVICIO MURCIANO DE SALUD</li>
</ul>
`;
var text_llamadas=`
<h4 class="h4">Gestion de Incidencias</h4>
      <ul class="lista">
        <p class="bold">Respuestas rapidas</p>
        <li class=""><b>Resuelto: </b>Usuario nos confirma que las soluciones aplicadas resolvieron el inconveniente. Ya esta solucionado.</li>
        <li class=""><b>No contesta: </b>Hemos intentado comunicarnos con el usuario sin éxito. Pendientes de contactar nuevamente.</li>
        <li class=""><b>Limpieza PC:<br> </b>Nos llaman y nos dejan el equipo, realizamos las siguientes acciones:<br>
          Actualizamos politicas del sistema.<br>
          Eliminamos temporales del sistema.<br>
          Liberamos espacio en C.<br>
          Pasamos SMSClean.<br>
          Actualizamos antivirus y lo dejamos pasando.</li>
          <li><b>Usuario vacaciones: </b>Pendiente de continuar tramitando. Ponemos la incidencia en estado pendiente a la espera de
            su incorporación a su puesto de trabajo.</li>
        
        <p class="bold">Resoluciones</p>

        <li class=""><b>Resuelto: </b>Tras contactar con la usuaria nos indica que puede trabajar correctamente, damos por resuelta la incidencia.</li>
        <li class=""><b>Resuelto por 3 días de no confirmación:</b> Se ha intentado contactar con el usuario en repetidas ocasiones cumpliendo con el
          Protocolo de Actuación para confirmar la resolución de su incidencia.<br> Tras ello pasamos la
          incidencia a estado Resuelto, a esperas de que el usuario si lo estima procedente, contacte de
          nuevo con nosotros.</li>
          <li><b>Cancelado 5 días no contesta: </b>Se ha intentado contactar con el usuario en repetidas ocasiones cumpliendo con el
            Protocolo de Actuación para resolver su incidencia.<br> Tras ello pasamos la incidencia a estado
            Cancelado, a esperas de que el usuario si lo estima procedente, contacte de nuevo con
            nosotros.</li>
            <li><b>Incidencias duplicadas: </b>Procedemos a Cancelar su incidencia por estar duplicada. Seguimos trabajando en su
              resolución en la incidencia INC</li>
              </ul>
`;
