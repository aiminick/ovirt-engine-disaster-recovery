# You can specialize this file for each language.
# For example, for French create a messages.fr file
#

title = oVirt Engine Disaster Recovery

################################################
#Data tables messages
################################################
datatables.sSearch =
datatables.sLengthMenu = Mostrar _MENU_
datatables.sProcessing = Procesando...
datatables.sZeroRecords = No se encontraron resultados
datatables.sEmptyTable = Ningún dato disponible en esta tabla
datatables.sInfo = Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros
datatables.sInfoEmpty = Mostrando registros del 0 al 0 de un total de 0 registros
datatables.sInfoFiltered = (filtrado de un total de _MAX_ registros)
datatables.sInfoThousands = ,
datatables.sLoadingRecords = Cargando...
datatables.sFirst = Primero
datatables.sLast = Último
datatables.sNext = Siguiente
datatables.sPrevious = Anterior
datatables.sSortAscending = Activar para ordenar la columna de manera ascendente
datatables.sSortDescending = Activar para ordenar la columna de manera descendente

################################################
#JQuery validate messages
################################################
jvalidation.required = Este campo es requerido.
jvalidation.remote = Por favor, corrija este campo.
jvalidation.email = Por favor, ingrese una dirección de correo válida.
jvalidation.url = Por favor, ingrese una URL valida.
jvalidation.date = Por favor, ingrese una fecha válida.
jvalidation.dateISO = Por favor, ingrese una fecha válida(ISO).
jvalidation.number = Por favor, ingrese un valor numérico.
jvalidation.digits = Por favor, ingrese únicamente dígitos.
jvalidation.creditcard = Por favor, ingrese un número de tarjeta de crédito válido.
jvalidation.equalTo = Por favor, ingrese el mismo valor nuevamente.
jvalidation.accept = Por favor, ingrese un valor con una extensión válida.
jvalidation.maxlength = Por favor, ingrese no más de {0} caracteres.
jvalidation.minlength = Por favor, ingrese al menos {0} caracteres.
jvalidation.rangelength = Por favor, ingrese un valor entre {0} y {1} caracteres de longitud.
jvalidation.range = Por favor, ingrese un valor entre {0} y {1}.
jvalidation.max = Por favor, ingrese un valor menor o igual a {0}.
jvalidation.min = Por favor, ingrese un valor mayor o igual a {0}.
jvalidation.unique = Debe ser único

################################################
#Play validation messages
################################################
validation.required = Este campo es requerido.
validation.remote = Por favor, corrija este campo.
validation.email = Por favor, ingrese una dirección de correo válida.
validation.url = Por favor, ingrese una URL valida.
validation.number = Por favor, ingrese un valor numérico.
validation.equalTo = Por favor, ingrese el mismo valor nuevamente.
validation.unique = Debe ser único
validation.maxSize = Por favor, ingrese no más de %2$d caracteres.
validation.minSize = Por favor, ingrese al menos %2$d caracteres.
validation.equals = Debe ser igual que %2$s
validation.invalid = Valor incorrecto


################################################
#General messages
################################################
backend.title = oVirt Engine Disaster Recovery
state.active = Activo
state.inactive = Inactivo
form.cancel = Cancelar
form.delete = Eliminar
form.save = Guardar
form.search = Buscar
form.register = Registrar
form.success = Operación exitosa
form.download = Descargar
form.error = Existen errores en el formulario, por favor verificar
form.startDate = Fecha inicial
form.endDate = Fecha final

select.search = Buscar
select.selectAll = Seleccionar todos
select.nonSelected = Ninguno seleccionado
select.selected = seleccionado(s)
select.allSelected = Todos seleccionados
table.actions = Acciones


################################################
#Menu messages
################################################
menu.dashboard = Tablero
menu.users = Usuarios
menu.configuration = Configuración
menu.user.profile = Perfil
menu.user.logout = Salir

################################################
#Secure messages
################################################
secure.invaliduser = Usuario y/o contraseña incorrectos
secure.inactiveuser = Usuario deshabilitado
secure.title=Ingreso
secure.username=Usuario
secure.password=Contraseña
secure.remember=Recordarme
secure.signin=Enviar
secure.error=Usuario y/o contraseña inválido
secure.logout=Su sesión se ha cerrado exitosamente

################################################
#Users messages
################################################
users.title = Usuarios
users.new = Nuevo usuario
users.table.username = Usuario
users.table.firstName = Nombre
users.table.lastName = Apellido
users.table.role = Rol
users.table.lastAccess = Último acceso
users.table.active = Estado
users.table.edit = Editar
users.table.reset = Reiniciar contraseña
users.table.delete = Eliminar

users.create.title = Crear usuario
users.edit.title = Editar usuario
user.reset.confirm = ¿Está seguro que desea reiniciar la contraseña del usuario?
user.delete.confirm = ¿Está seguro que desea eliminar el usuario?

user.username = Usuario
user.role = Rol
user.firstName = Nombre
user.lastName = Apellido
user.active = Activo

################################################
#Profile messages
################################################
profile.title = Perfil
passwordChange.title = Cambio de contraseña

firstName = Primer nombre
lastName = Apellido
password = Contraseña
passwordConfirm = Confirmar contraseña

validation.equals.password = Las validación de contraseña no coincide

################################################
#Configuration messages
################################################
configuration.edit.title = Configuración general
hosts.edit.title = Hosts
storageConnections.edit.title = Conexiones a almacenamiento

configuration.tab.configuration = Configuración general
configuration.tab.hosts = Hosts
configuration.tab.connections = Almacenamiento

configuration.managerIp = Host VM Manager (contingencia)
configuration.managerUser = Usuario - Host (contingencia)
configuration.managerKeyLocation = Ubicación llave privada (SSH)
configuration.managerBinLocation = Comando Inicio Manager (contingencia)
configuration.managerCommand = Comando Argumentos (contingencia)

configuration.apiURL = URL API
configuration.apiPassword = Password API
configuration.apiUser = Usuario API
configuration.trustStore = Truststore
configuration.validateCertificate = Validar certificado
configuration.trustStorePassword = Contraseña truststore

configuration.currentConnections = Conexiones actuales
connection.ip = IP
connection.iqn = IQN

form.notrusstore = Debe especificar un trust store para validar la conexión al API.

################################################
#Dashboard messages
################################################

dashboard.title = Tablero

dashboard.datacenters = Centros de datos
dashboard.datacenters.chart = Estado de centros de datos
dashboard.data_center.name = Nombre
dashboard.data_center.status = Estado

dashboard.hosts = Hosts
dashboard.hosts.chart = Estado de hosts
dashboard.host.name = Nombre
dashboard.host.status = Estado


################################################
#Hosts configuration
################################################

host.name = Nombre
host.ip = Dirección ip
host.status = Estado
host.configuration = Configuración

connection.originIp = IP origen
connection.originIqn = IQN origen
connection.destinationIp = IP destino
connection.destinationIqn = IQN destino

ip.new = Nueva IP
iqn.new = Nueva IQN

unassigned = No asignado
down = Abajo
maintenance = En mantenimiento
up = Arriba
non_responsive = No responde
error = Error
installing = Instalando
install_failed = Instalación fallida
reboot = Reiniciando
preparing_for_maintenance = Preparandose para mantenimiento
non_operational = No operacional
not_operational = No operacional
pending_approval = Pendiente de aprobación
initializing = Inicializando
problematic = Problemático
contend = Conteniendo
other = Otro

none = Ninguno
failover.remotehost = Destino en Failover
failback.remotehost = Destino en Failback

ws.api.error.connection = No fue posible conectarse con el API
ws.error.exception = Occurió un error inesperado, por favor intente de nuevo más tarde

manager.unreachable.title = API no disponible
manager.unreachable.message = El API no se encuentra disponible en este momento. Por favor enciéndalo ingresando a la <br>consola administrativa o presione el siguiente botón para encenderlo.
manager.unreachable.turnon = Encender
manager.unreachable.tryagain = Reintentar
manager.unreachable.configuration = Ir a configuración


dashboard.productionhosts = Hosts de producción
dashboard.productionhosts.chart = Estado de hosts de producción
dashboard.contingencyhosts = Hosts de contingencia
dashboard.contingencyhosts.chart = Estado de hosts de contingencia

################################################
#DRP
################################################

drp.title = Operación de recuperación de desastres
start.failback = Failback
start.failover = Failover

drp.verifyinghosts = Verificando hosts
drp.originhost = Host de origen (%s) estado: %s
drp.destinationhost = Host de destino (%s) estado: %s
drp.hostsmaintenancerequired = Todos los hosts deben estar en mantenimiento para iniciar el proceso controlado
drp.hostsnotready = Hosts remotos no se encuentran listos para la operación
drp.hostsready = Hosts listos para el proceso controlado
drp.nohosts = No existen hosts disponibles
drp.fetchinghosts = Obteniendo hosts...
drp.fetchinghostssuccess = Hosts obtenidos exitosamente
drp.nohostsconfigured = No existen hosts configurados
drp.disablingpm = Deshabilitando manejo de encendido en host: %s
drp.disablingpmsuccess = Manejo de encendido deshabilitado: %s
drp.fencinghost = Cercando host: %s
drp.fencinghostsuccess = Host cercado: %s
drp.deactivatinghost = Desactivando host: %s
drp.deactivatinghostsuccess = Host desactivado: %s
drp.updatingdbconnections = Actualizando conexiones de almacenamiento
drp.updatingdbconnections.error = Error actualizando conexiones de almacenamiento
drp.activatinghost = Activando host: %s
drp.activatinghostsuccess = Host activado: %s
drp.enablingpm = Habilitando manejo de encendido en host: %s
drp.enablepmsuccess = Manejo de encendido habilitado: %s
drp.alreadystarted = Operación de recuperación de desastres ya se encuentra en proceso
drp.starting = Iniciando proceso: %s
drp.connectingapi = Conectandose a API...
drp.connectingapisuccess = Conexión exitosa
drp.finished = Operación finalizada con estado: %s
drp.couldnotlistconnections = No se pudo listar conexiones actuales
drp.db.connection = iqn: %s -- conexión: %s
drp.db.noconnections = No existen conexiones configuradas
drp.db.currentconnections = Conexiones actuales
drp.db.modifiedconnections = Conexiones modificadas
drp.dbconfiguration.error = Existe un error con los parámetros de instalación. Contacte al administrador del sistema.
drp.invalidconfiguration = Configuración inválida
drp.waitingactivehost = Esperando activación de hosts
drp.hoststatus = Host (%s) estado: %s
drp.fencingexception = No fue posible cercar host %s
drp.deactivateexceptioninvalidhost = Host inválido
drp.deactivateexception = No fue posible desactivar host %s
drp.activateexceptioninvalidhost = Host inválido
drp.activateexception = No fue posible activar host %s
drp.error.rollback = No fue posible revertir
drp.nodbcredentials = No existe configuraciónd de base de datos definida
drp.activateexceptionhosts = No fue posible activar los hosts

drp.status.host.invalid = No fue posible cambiar el estado del host %s
drp.status.host.valid = El estado del host %s fue cambiado exitosamente

drp.waitingactivedatacenters = Esperando activación de centros de datos
drp.datacenterstatus = Centro de datos (%s) estado: %s
drp.status.datacenter.invalid = No fue posible cambiar el estado del host %s
drp.status.datacenter.valid = El estado del host %s fue cambiado exitosamente
drp.activateexceptiondatacenters = No fue posible activar los centros de datos

FAILOVER = Failover
FAILBACK = Failback

SUCCESS = Exitoso
FAILED = Error
