import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  // template: '<p>estudiante works!</p><app-personas></app-personas>',
  // styles:¨{},
  styleUrls: ['./estudiante.component.css']

})
export class EstudianteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title='Estudiante';

}
