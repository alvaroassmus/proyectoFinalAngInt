import { EventEmitter, Injectable } from '@angular/core';
import { TutorialDTO } from '../modelos/tutorialDTO';

@Injectable({
  providedIn: 'root'
})
export class TutorialesService {

  private listaTutoriales: TutorialDTO[] = [];
  private elementoTutorialDTO: TutorialDTO = new TutorialDTO();

  public emisorTutorial: EventEmitter<TutorialDTO> = new EventEmitter<TutorialDTO>();
  public filtarTutorial: EventEmitter<TutorialDTO[]> = new EventEmitter<TutorialDTO[]>();

  constructor() {
    this.listaTutoriales.length = 0;
    let tutorial: TutorialDTO = new TutorialDTO();
    tutorial.generarData(2,'Pedro', 'Prueba', 'X');
    this.listaTutoriales.push(tutorial);
    let tutorial2: TutorialDTO = new TutorialDTO();
    tutorial2.generarData(3,'María', 'Prueba 2', 'Pendiente');
    this.listaTutoriales.push(tutorial2);
  }

  public cargarTutoriales(): TutorialDTO[] {
    return this.listaTutoriales;
  }

  public eliminarTutoriales(): TutorialDTO[] {
      this.listaTutoriales.length = 0;
     return this.listaTutoriales;
  }

  public setTutorial(tutorial: TutorialDTO): void {
    this.elementoTutorialDTO = tutorial;
  }

  public getTutorial(): TutorialDTO {
    return this.elementoTutorialDTO;
  }

  public actualizarTutorial(tutorial: TutorialDTO): void {
    this.listaTutoriales.find(bTuto => {
      if(bTuto.id === tutorial.id) {
        bTuto = tutorial;
      }
    });
  }

  public eliminarTutorial(tutorial: TutorialDTO): void {
    this.listaTutoriales.splice(this.listaTutoriales.indexOf(tutorial),1);
  }

  public agregarTutorial(tutorial: TutorialDTO): void {
    this.listaTutoriales.push(tutorial);
  }

  public retornarNuevoId(): number {
    return new Date().getTime();
  }

  public filtrarLista(dato: string): void{
    if (dato===''){
      this.filtarTutorial.emit(this.listaTutoriales);
    }
    else{
      this.filtarTutorial.emit(this.listaTutoriales.filter(tuto=> tuto.nombre.match(dato)));
    }
  } 

}
