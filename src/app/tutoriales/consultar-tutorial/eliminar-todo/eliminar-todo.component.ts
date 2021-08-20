import { Component, OnInit } from '@angular/core';
import { TutorialesService } from 'src/app/servicios/tutoriales.service';

@Component({
  selector: 'app-eliminar-todo',
  templateUrl: './eliminar-todo.component.html',
  styleUrls: ['./eliminar-todo.component.css']
})
export class EliminarTodoComponent implements OnInit {

  constructor( private tutoService : TutorialesService) { }

  ngOnInit(): void {
  }

  eliminarTodo(){
    this.tutoService.eliminarTutoriales();    
  }

}
