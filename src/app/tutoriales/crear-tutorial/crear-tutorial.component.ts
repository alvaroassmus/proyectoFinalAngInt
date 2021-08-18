import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-tutorial',
  templateUrl: './crear-tutorial.component.html',
  styleUrls: ['./crear-tutorial.component.css']
})
export class CrearTutorialComponent implements OnInit {

 public tutorial = { nombre : " ", descripcion : " "  };

 
 constructor() { }

  ngOnInit(): void {
  }

  agregarTuto() : void {
    console.log("agregando tutorItiaL!" , this.tutorial);
    
  }

}
