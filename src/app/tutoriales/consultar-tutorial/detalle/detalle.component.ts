import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TutorialDTO } from 'src/app/modelos/tutorialDTO';
import { TutorialesService } from 'src/app/servicios/tutoriales.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public tutorial: TutorialDTO = new TutorialDTO();

  constructor(private router: Router,
    private tutoService: TutorialesService) { }

  ngOnInit(): void {
    this.tutoService.emisorTutorial.subscribe(emisor => {
      this.tutorial = emisor;
    });
  }

  editar(){
    this.tutoService.setTutorial(this.tutorial);
    this.router.navigate(['/editar']);    
  }

}
