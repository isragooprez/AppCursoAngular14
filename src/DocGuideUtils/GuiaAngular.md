
#  COMANDOS ANGULAR
### Crea un componente y sus dependencias como app.module

* `ng generate component estudiante`
* `ng g c estudiante` Metodo abreviado
* `ng g c persona --skipTest=true`


> ## Instalar complementos 
(--save permite guardar y genera la referencias en el app.module)

`npm install bootstrap jquery popper.js --save`

> ### Instalar BOOTSTRAP
`npm install bootstrap --save`

`npm install bootstrap`
> ### Instalar JQUERY
`npm install jquery --save`

`npm install jquery`
> ### Instalar POPPER
`npm install popper.js --save`

`npm install popper.js`

> ### Configurar para no inicializar los objetos
***  Modificar el archivo (./tsconfig.json)
````json
"compilerOptions": {
    "strictPropertyInitialization": false,
}
````


