import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialDTO } from 'src/app/modelos/tutorialDTO';

@Component({
  selector: 'app-crear-tutorial',
  templateUrl: './crear-tutorial.component.html',
  styleUrls: ['./crear-tutorial.component.css']
})
export class CrearTutorialComponent implements OnInit {

 public tutorial = new TutorialDTO();


 constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
  }

  agregarTutorial() : void {
    console.log("agregando tutorial!" , this.tutorial);
  }

}
