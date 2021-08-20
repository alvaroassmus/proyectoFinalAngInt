import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultar-tutorial',
  templateUrl: './consultar-tutorial.component.html',
  styleUrls: ['./consultar-tutorial.component.css']
})
export class ConsultarTutorialComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
