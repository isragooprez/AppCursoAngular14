import {Person} from "./persona/person.model";

export class PersonasService {

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
    this.people.push(persona);
  }
}
