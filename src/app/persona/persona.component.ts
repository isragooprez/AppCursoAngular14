import {Component, Input, OnInit} from '@angular/core';
import {Person} from "./person.model";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  title = 'Persona';
  personaTitle = 'CREAR PERSONA';

  nombre: string = 'Israel';
  apellido: string = 'Perez';
  edad: number = 33;
  @Input() person: Person;
  @Input() index: number;




  getEdad(): number {
    return this.edad;
  }

}
