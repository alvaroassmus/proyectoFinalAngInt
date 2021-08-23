import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialDTO } from 'src/app/modelos/tutorialDTO';
import { TutorialesService } from 'src/app/servicios/tutoriales.service';

@Component({
  selector: 'app-editar-tutorial',
  templateUrl: './editar-tutorial.component.html',
  styleUrls: ['./editar-tutorial.component.css']
})
export class EditarTutorialComponent implements OnInit {

  public tutorial: TutorialDTO = new TutorialDTO();

  constructor(private router: Router, private ruta: ActivatedRoute, private tutoService: TutorialesService) { }

  ngOnInit(): void {
    this.tutorial = this.tutoService.getTutorial();
  }

  publicarTuto() : void {
    this.tutorial.estado = 'Publicado';
    console.log("publicando tutorItiaL!" , this.tutorial);
  }

  eliminarTuto() : void {
    console.log("eliminando tutorItiaL!" , this.tutorial);
    this.tutoService.eliminarTutorial(this.tutorial);
    this.router.navigate(['/consultar']);
  }

  actualizarTuto() : void {
    console.log("actualizando tutorItiaL!" , this.tutorial);
    this.tutoService.actualizarTutorial(this.tutorial);
    this.router.navigate(['/consultar']);
  }
}
