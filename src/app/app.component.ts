import {Component, OnInit} from '@angular/core';
import {Person} from "./persona/person.model";
import {LoggingService} from "./Logging.service";
import {PersonasService} from "./personas.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CURSO ANGULAR 14';
  saludos = 'POR: ISRAGOO PREZ';
  valorInput = 'Two binding property  and event';


  people: Person[] = [];

  constructor(private loggingService: LoggingService,
              private personasServices: PersonasService) {
  }

  ngOnInit(): void {
    this.people = this.personasServices.people;
  }


  // onAgregarPersona() {
  //   let persona1 = new Person("David","Rodriguez");
  //   this.personasServices.agregarPersona(persona1);
  // }


}
