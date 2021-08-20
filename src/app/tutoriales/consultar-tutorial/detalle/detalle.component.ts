import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TutorialDTO } from 'src/app/modelos/tutorialDTO';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public tutorial: TutorialDTO = new TutorialDTO();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editar(){
    this.router.navigate(['/editar']);    
  }

}
