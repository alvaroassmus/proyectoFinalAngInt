import { Injectable } from '@angular/core';
import { TutorialDTO } from '../modelos/tutorialDTO';

@Injectable({
  providedIn: 'root'
})
export class TutorialesService {

  private listaTutoriales: TutorialDTO[] = [];

  constructor() { 
  }

  public cargarTutoriales(): TutorialDTO[] {
    let tutorial: TutorialDTO = new TutorialDTO();
    tutorial.generarData(2,'Pedro', 'Prueba', 'X');
    this.listaTutoriales.push(tutorial);
    //TODO Hacer el metodo vagos
    return this.listaTutoriales;
  }
}
