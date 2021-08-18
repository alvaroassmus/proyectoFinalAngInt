import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearTutorialComponent } from './tutoriales/crear-tutorial/crear-tutorial.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EditarTutorialComponent } from './tutoriales/editar-tutorial/editar-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTutorialComponent,
    NavbarComponent,
    EditarTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
