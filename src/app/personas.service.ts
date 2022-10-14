import {Person} from "./persona/person.model";
import {LoggingService} from "./Logging.service";
import {Injectable} from "@angular/core";

@Injectable()
export class PersonasService {


  constructor(private loggingServices: LoggingService) {

  }




  people: Person[] = [
    new Person('Juan', 'Quito'),
    new Person('Carlos', 'Freire'),
    new Person('Pedro', 'Ullauri'),
    new Person('Maria', 'Perez'),
    new Person('Marco', 'Ramos'),
    new Person('Hernan', 'Bermeo'),
    new Person('Maria', 'Bermeo'),
  ];

  agregarPersona(persona: Person) {
    this.loggingServices.enviaMensajeConsola("agregamos persona desde loggin/persona services: "+"agregamos persona" +persona.name+persona.surname);
    this.people.push(persona);
  }
}
