import {Component} from '@angular/core';
import {Person} from "./persona/person.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CURSO ANGULAR 14';
  saludos = 'POR: ISRAGOO PREZ';
  valorInput = 'Two binding property  and event';


  people: Person[] = [new Person('Juan', 'Quito'),
    new Person('Carlos', 'Freire'),
    new Person('Pedro', 'Ullauri'),
    new Person('Maria', 'Perez'),
    new Person('Marco', 'Ramos'),
    new Person('Hernan', 'Bermeo'),
    new Person('Maria', 'Bermeo'),
  ];

  personaAgregada(persona: Person) {
    this.people.push(persona);

  }


}
