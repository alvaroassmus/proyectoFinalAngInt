import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialDTO } from 'src/app/modelos/tutorialDTO';
import { TutorialesService } from 'src/app/servicios/tutoriales.service';

@Component({
  selector: 'app-crear-tutorial',
  templateUrl: './crear-tutorial.component.html',
  styleUrls: ['./crear-tutorial.component.css']
})
export class CrearTutorialComponent implements OnInit {

 public tutorial = new TutorialDTO();

 constructor(private router: Router, private ruta: ActivatedRoute, private tutoService: TutorialesService) { }

  ngOnInit(): void {
    this.tutorial.setId(this.tutoService.retornarNuevoId());
  }

  agregarTutorial() : void {
    console.log("agregando tutorial!" , this.tutorial);
    this.tutorial.setEstado('Por publicar');
    this.tutoService.agregarTutorial(this.tutorial);
    this.router.navigate(['/consultar']);
  }
}
