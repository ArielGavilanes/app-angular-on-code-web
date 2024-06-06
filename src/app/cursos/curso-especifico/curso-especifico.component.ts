import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';
import { CursosService } from '../service/cursos.service';

@Component({
  selector: 'app-curso-especifico',
  templateUrl: './curso-especifico.component.html',
  styleUrls: ['./curso-especifico.component.css'],
})
export class CursoEspecificoComponent implements OnInit {
  id_curso: any = 0;

  curso: any[] = [];

  contenidoDeCurso: any;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute
  ) {}

  getCourseById(id_curso: number) {
    return this.cursosService.getCourseById(id_curso).subscribe(
      (response) => {
        this.curso = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getContentFromACourseById(id_curso: number) {
    return this.cursosService.getContentFromACourseById(id_curso).subscribe(
      (response) => {
        this.contenidoDeCurso = response;
        this.contenidoDeCurso.sort(
          (a: any, b: any) => a.id_contenido - b.id_contenido
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.id_curso = this.route.params.subscribe((params) => {
      this.id_curso = params['id_curso'];
      this.getCourseById(this.id_curso);
      this.getContentFromACourseById(this.id_curso);
    });
  }
}
