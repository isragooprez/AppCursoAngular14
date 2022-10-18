import {Component, Input, OnInit} from '@angular/core';
import {Person} from "./person.model";
import {PersonasService} from "../personas.service";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {


  title = 'Persona';
  personaTitle = 'CREAR PERSONA';

  nombre: string = 'Israel';
  apellido: string = 'Perez';
  edad: number = 33;
  @Input() person: Person;
  @Input() index: number;

  constructor(private personasService: PersonasService) {
  }

  ngOnInit(): void {
  }


  getEdad(): number {
    return this.edad;
  }

  emitirSaludo() {

    this.personasService.saludar.emit(this.index);
  }

}
