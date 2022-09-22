# CSS/less
Less es una extensión de CSS para realizar un comportamiento dinánico a través de variables, mixins, operaciones y funciones.

---

AMBIENTE_HABILITADO: Es el Ambiente de despliege 

```javascript
var FrontEnds = {
	Habilitado: "XXXX",
	XXXX: "pichi"
};
```

Para realizar cambios en los estilos de boostrap del AMBIENTE_HABILITADO se debe modificar el archivo `variables.less` ubicado en la ruta.

```bash
├───css                     
│   ├───less      
│   │   ├───less_AMBIENTE_HABILITADO   
│   │   │   ├───variables.less         
```

Para realizar cambios en los estilos de propios del sistema del AMBIENTE_HABILITADO se debe modificar el archivo `variables.less` ubicado en la ruta.

```bash
├───css                     
│   ├───less      
│   │   ├───less_AMBIENTE_HABILITADO   
│   │   │   ├───App      
│   │   │   │   ├───variables.less   
│   │   │   │   ├───instrucciones.txt  
```

Además en este fichero exite un arhivo llamado `instrucciones.txt` para compilar los fuentes less. 

---

Al finalizar la compilación de los ficheros se generan 2 archivos. El archivo `bootstrap.AMBIENTE_HABILITADO.css` que contiene los cambios de bootstrap y `main.AMBIENTE_HABILITADO.css` que contiene los cambios propios del sistema.
