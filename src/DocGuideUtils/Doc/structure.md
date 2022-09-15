# Estructura

```bash
           Incluye archivos .po de traducciones
```

La plataforma web se divide en 2 aplicaciones: 

1. Login
2. Aplicaciones

La aplicacion Login, luego de una autenticacion exitosa redirige a la aplicacion principal cuya pagina principa se encuentra en:

* _Aplicaciones/index.html_

---

## Controladores comunes

Aplicaciones/Compartidas/controller/[generador.js](controladores/generador.md)
* generador.js: Controlador que se encarga  de la renderización de componentes visuales. Usa easylayout->easyform para la obtención de campos y configuraciones.

Aplicaciones/Compartidas/controller/[generica.js](controladores/generica.md)
* generica.js: Controlador que se encarga de orquestar y renderizar los campos de empresa y servicio.

Aplicaciones/Compartidas/directivas/[SeleccionarEmpresasCtrl.js](controladores/seleccionarEmpresa.md)
* En base a configuración del usuario permite cargar un formulario para agregar una empresa al localStorage para contemplarla en el resto de consultas de la plataforma.


## Servicios

[SharedServices](services/shared-service.md)
* Funcionalidades generales compartidas por diferentes componentes de la aplicación.

[modals.js](services/modals.md)
* Renderización y control de  pop-ups en toda la aplicación
    - ``mostrarPopUp()``: Carga un modal con controlador completo
    - ``mostrarModal()``: Carga un pop-up informativo sin controlador


---

## Directivas
Aplicaciones/Compartidas/directivas/**directivas.js**
* [easyfiltros](directives/easyfilter.md): Creación de formularios
* [easygrid](directives/easygrid.md): Construcción de componentes de tablas
* [easycargas](directives/easycargas.md): Cargas en el sistema para lectura, validación, carga de archivos.
* [easylayout](directives/easylayout.md): Creación de formularios y tablas a partir de BD: Cashmanagement..Servicios_Transaccion. La estructura jerárquica se basa en la tabla Cashmanagement..c_layout. Cada uno de los campos se encuentra en servicios transaccion. El controlador se establece en el panel padre el cual va a procesar. Easygenerador invoca a easylayout para la creacion de los formularios dinamicos
* [easyform](directives/easyform.md): Constructor de los formularios o tablas a partir de los campos obtenidos de easylayout.
* [easySpinner](directives/easySpinner.md): Spinner de carga con bloqueo de pantalla. 

Aplicaciones/Compartidas/directivas/[easytoken.js](directives/easytoken.md)
* EasyToken: Directiva para manejo de múltiples factores de autenticación: 
    - otp
    - token físico
    - preguntas
    - tarjeta de coordenadas

Aplicaciones/Compartidas/directivas/**easy-ps-empresas.js**
* Directiva que renderiza categorías, empresas, y maneja la relación entre ellas para pantallas de pago de servicios.



---

## Estilos CSS

css/less
* [less](less.md): Creación y edición de estilos CSS.
