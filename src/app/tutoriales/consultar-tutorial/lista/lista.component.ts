import { Component, OnInit } from '@angular/core';
import { TutorialDTO } from 'src/app/modelos/tutorialDTO';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public listaTutoriales: TutorialDTO[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  verDetalle(tutorial: TutorialDTO){
    
  }

}
