import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPersonaComponent } from './listar-persona/listar-persona.component';
import { FormPersonaComponent } from './form-persona/form-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPersonaComponent,
    FormPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
