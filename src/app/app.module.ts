import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PersonasComponent} from "./personas/personas.component";
import { PersonaComponent } from './persona/persona.component';
import { EstudianteComponent } from './estudiante/estudiante.component';

@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent, EstudianteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
