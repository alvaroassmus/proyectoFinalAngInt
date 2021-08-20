import { Component, OnInit } from '@angular/core';
import { TutorialDTO } from 'src/app/modelos/tutorialDTO';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public tutorial: TutorialDTO = new TutorialDTO();

  constructor() { }

  ngOnInit(): void {
  }

  editar(){
    
  }

}
