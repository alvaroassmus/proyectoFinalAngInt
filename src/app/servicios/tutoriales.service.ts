import { EventEmitter, Injectable } from '@angular/core';
import { TutorialDTO } from '../modelos/tutorialDTO';

@Injectable({
  providedIn: 'root'
})
export class TutorialesService {

  private listaTutoriales: TutorialDTO[] = [];

  public emisorTutorial: EventEmitter<TutorialDTO> = new EventEmitter<TutorialDTO>();

  constructor() { 
  }

  public cargarTutoriales(): TutorialDTO[] {
    this.listaTutoriales.length = 0;
    let tutorial: TutorialDTO = new TutorialDTO();
    tutorial.generarData(2,'Pedro', 'Prueba', 'X');
    this.listaTutoriales.push(tutorial);
    let tutorial2: TutorialDTO = new TutorialDTO();
    tutorial2.generarData(3,'María', 'Prueba 2', 'Pendiente');
    this.listaTutoriales.push(tutorial2);
    //TODO Hacer el metodo vagos
    return this.listaTutoriales;
  }

  public eliminarTutoriales(): TutorialDTO[] {
      this.listaTutoriales.length = 0;      
     return this.listaTutoriales;
  }

}
