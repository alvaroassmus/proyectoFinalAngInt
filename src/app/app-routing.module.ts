import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarTutorialComponent } from './tutoriales/consultar-tutorial/consultar-tutorial.component';
import { CrearTutorialComponent } from './tutoriales/crear-tutorial/crear-tutorial.component';
import { EditarTutorialComponent } from './tutoriales/editar-tutorial/editar-tutorial.component';

const routes: Routes = [
  {
    path: '', component: ConsultarTutorialComponent,
    children: [
      { path: 'crear', component: CrearTutorialComponent, },
      { path: 'editar', component: EditarTutorialComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
