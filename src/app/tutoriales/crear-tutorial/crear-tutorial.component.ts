import { Component, OnInit } from '@angular/core';
import { TutorialDTO } from 'src/app/modelos/tutorialDTO';

@Component({
  selector: 'app-crear-tutorial',
  templateUrl: './crear-tutorial.component.html',
  styleUrls: ['./crear-tutorial.component.css']
})
export class CrearTutorialComponent implements OnInit {

 public tutorial = new TutorialDTO();


 constructor() { }

  ngOnInit(): void {
  }

  agregarTutorial() : void {
    console.log("agregando tutorial!" , this.tutorial);
  }

}
