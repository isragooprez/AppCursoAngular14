import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from "../persona/person.model";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() {
  }

  @Output() personaCreada = new EventEmitter<Person>();

  nombreInput: string = '';
  apellidoInput: string = '';

  ngOnInit(): void {
  }


  createPersona() {
    let persona1 = new Person(this.nombreInput, this.apellidoInput);
    //this.people.push( persona1 );
    this.personaCreada.emit(persona1);
  }

}
