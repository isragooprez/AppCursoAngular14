import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from "./personas/personas.component";
import { PersonaComponent } from './persona/persona.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import {FormsModule} from "@angular/forms";
import { FormularioComponent } from './formulario/formulario.component';
import {LoggingService} from "./Logging.service";
import {PersonasService} from "./personas.service";
@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent, EstudianteComponent, FormularioComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [LoggingService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
