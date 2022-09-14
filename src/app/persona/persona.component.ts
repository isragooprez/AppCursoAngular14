import {Component, OnInit} from '@angular/core';

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
  titulo = 'MUDULO PERSONAS';
  personaTitle = 'CREAR PERSONA';

  nombre: string = 'Israel';
  apellido: string = 'Perez';
  edad: number = 33;


  getEdad(): number {
    return this.edad;
  }

}
