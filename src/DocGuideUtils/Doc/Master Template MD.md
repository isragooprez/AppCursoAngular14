
# Compilación
## Compilación
### Compilación
Tareas de compilación y unificación del aplicativo.

Ubicado en el archivo gruntfile.js

* var Clientes = {}: Tiene diferentes clientes en caso de usar un mismo código fuente, sin embargo se separaron los fuentes de los diferentes clientes en esta versión.

  **Nota**:  Confirmar que en el nodo Clientes este seteado Pichincha:

- [Funciones Generales](funcionesgenerales.md)


![alt text](images/easyBig.png)

```javascript
var Clientes = {
    Habilitado: 'xxx'}
```

```bash
├───css                     
│   ├───less      
│   │   ├───less_AMBIENTE_HABILITADO   
│   │   │   ├───App      
│   │   │   │   ├───variables.less   
│   │   │   │   ├───instrucciones.txt  
```
Tareas principales:
- **clean**: limpia la carpeta de destino previo ejecucion.
- **copy**: Copia ficheros de resultado.
- **zip**: comprime el resultado de compilacion.
- **uglify**: unifica y minifica los archivos en modulos a traves del metodo GetApplicationScripts().
- **htmlBuild**: Limpieza, inyeccion y minificacion de configuracion sobre los archivos html.
- **manifest**: Genera archivos manifest y manejo de cache **app-cache**. Solo funciona bajo protocolo https v2.0
- **ngconstant**: Crea archivo de configuracion de ambientes


## Procedimiento de ejecucion:

**Compilacion Web**
* **AppConfigServices.js**: Guarda arquitectura del desglose de transacciones de Multicanal.
---

> grunt buildtask

**Compilacion mobile**

> grunt compileMobile

*  Generacion de plataforma

> - cordova platform add ios
> - cordova platform add android
