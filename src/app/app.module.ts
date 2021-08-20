import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearTutorialComponent } from './tutoriales/crear-tutorial/crear-tutorial.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EditarTutorialComponent } from './tutoriales/editar-tutorial/editar-tutorial.component';
import { ConsultarTutorialComponent } from './tutoriales/consultar-tutorial/consultar-tutorial.component';
import { FiltroComponent } from './tutoriales/consultar-tutorial/filtro/filtro.component';
import { ListaComponent } from './tutoriales/consultar-tutorial/lista/lista.component';
import { DetalleComponent } from './tutoriales/consultar-tutorial/detalle/detalle.component';
import { EliminarTodoComponent } from './tutoriales/consultar-tutorial/eliminar-todo/eliminar-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTutorialComponent,
    NavbarComponent,
    EditarTutorialComponent,
    ConsultarTutorialComponent,
    FiltroComponent,
    ListaComponent,
    DetalleComponent,
    EliminarTodoComponent
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
