import {Component} from "@angular/core";
import {Person} from "../persona/person.model";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent {

  title = 'Personas';
  titulo = 'MUDULO PERSONAS';
  listaPersonasTitle = 'LISTA DE PERSONAS';
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  mostrar = false;
  valorInput = 'Two binding property  and event';

  // people: Person[] = [new Person('Juan', 'Quito'),
  //   new Person('Carlos', 'Freire'),
  //   new Person('Pedro', 'Ullauri'),
  //   new Person('Maria', 'Perez'),
  //   new Person('Marco', 'Ramos'),
  //   new Person('Hernan', 'Bermeo'),
  //   new Person('Maria', 'Bermeo'),
  //
  // ];

  agregarPersona() {
    this.mostrar = true;
    this.mensaje = 'Persona agregada';
  }

  modificarTitulo(event: Event) {

    console.log('Ingresando al evento input event');
    this.valorInput = (<HTMLInputElement>event.target).value;

  }


}
