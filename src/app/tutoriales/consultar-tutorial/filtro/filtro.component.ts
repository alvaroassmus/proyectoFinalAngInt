import { Component, OnInit } from '@angular/core';
import { TutorialesService } from 'src/app/servicios/tutoriales.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  public tituloBusqueda: string = '';

  constructor(private tutoService: TutorialesService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.tutoService.filtrarLista(this.tituloBusqueda);
  }

}
