import { Component, OnInit } from '@angular/core';
import { TutorialDTO } from 'src/app/modelos/tutorialDTO';
import { TutorialesService } from 'src/app/servicios/tutoriales.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public listaTutoriales: TutorialDTO[] = [];



  constructor(private tutoService: TutorialesService) {

  }

  ngOnInit(): void {
    this.tutoService.filtarTutorial.subscribe(tutoriales => {
      this.listaTutoriales = tutoriales;
    });
     this.tutoService.filtrarLista('');

  }

  verDetalle(tutorial: TutorialDTO){
       this.tutoService.emisorTutorial.emit(tutorial);
  }

}
