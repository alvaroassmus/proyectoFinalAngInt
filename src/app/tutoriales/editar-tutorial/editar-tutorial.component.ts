import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-tutorial',
  templateUrl: './editar-tutorial.component.html',
  styleUrls: ['./editar-tutorial.component.css']
})
export class EditarTutorialComponent implements OnInit {

  public tutorial = { nombre : " ", descripcion : " ", estado: "OctyEstado" };

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
  }

  publicarTuto() : void {
    console.log("publicando tutorItiaL!" , this.tutorial);
  }

  eliminarTuto() : void {
    console.log("eliminando tutorItiaL!" , this.tutorial);
  }

  actualizarTuto() : void {
    console.log("actualizando tutorItiaL!" , this.tutorial);
  }
}
