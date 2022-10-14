import {Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {Person} from "../persona/person.model";
import {LoggingService} from "../Logging.service";
import {PersonasService} from "../personas.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],

})
export class FormularioComponent implements OnInit {

  constructor(private logginService: LoggingService,
              private personasServices: PersonasService) {
  }

  // @Output() personaCreada = new EventEmitter<Person>();
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;


  ngOnInit(): void {
  }

  createPersona() {
    let persona1 = new Person(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.personasServices.agregarPersona(persona1);
  }


  onAgregarPersona() {
    let persona1 = new Person(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.personasServices.agregarPersona(persona1);




    // this.logginService.enviaMensajeConsola("Formulario.component:"+"Enviado Mensaje: " + persona1.name + " " + persona1.surname);
  }

  //PRIMERA FORMA DE RECUPERA DATOS VISTA
  //Two-way binding
//   Two-way binding gives components in your application a way to share data. Use two-way binding to listen for events and update values simultaneously between parent and child components.
//   See the live example / download example for a working example containing the code snippets in this guide.
// Prerequisites
//   To get the most out of two-way binding, you should have a basic understanding of the following concepts:
//   Property binding
//   Event binding
//   Inputs and Outputs
//
//   nombreInput: string = '';
//   apellidoInput: string = '';

  // createPersona() {
  //   let persona1 = new Person(this.nombreInput, this.apellidoInput);
  //   this.personaCreada.emit(persona1);
  // }

  //SEGUNDA FORMA DE RECUPERA DATOS VISTA
  // <!--  Local References #apellidoInput-->
  // createPersona(nombreInput: HTMLInputElement, apellidoInput:HTMLInputElement) {
  //   let persona1 = new Person(nombreInput.value, apellidoInput.value);
  //   this.personaCreada.emit(persona1);
  // }

  // TERCERA FORMA DE RECUPERAR LOS DATOS VIEWCHAILD
  // @ViewChild('nombreInput') nombreInput: ElementRef;
  // @ViewChild('apellidoInput') apellidoInput: ElementRef;
  // createPersona() {
  //   let persona1 = new Person(this.nombreInput.nativeElement, this.apellidoInput.nativeElement);
  //   this.personaCreada.emit(persona1);
  // }


}
