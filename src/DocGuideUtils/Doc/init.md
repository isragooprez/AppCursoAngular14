# Inicialización

> npm install

Levantar ambiente en desarrollo: Ejecutar index.html

# Configuración

* ngconstant: Tarea  de grunt que se ejecuta con el nombre del ambiente

> grunt ngconstant [nombre de la configuracion ubicada en el archivo gruntfile.js]

* Ficheros de archivos de configuración de ambientes
/js/ambientes/*.json

* **AppConfigSettings.js** sobreescrito en jerarquía por **AppConfigSettings.Pichi.js**: Configuraciones (variables) que se usan dentro del aplicativo.

* **AppConfigServices.js**: Guarda arquitectura del desglose de transacciones de Multicanal.
