import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';
import { CursosService } from '../service/cursos.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-curso-especifico',
  templateUrl: './curso-especifico.component.html',
  styleUrls: ['./curso-especifico.component.css'],
})
export class CursoEspecificoComponent implements OnInit {
  id_curso: any = 0;

  curso: any[] = [];

  contenidoDeCurso: any;

  id_rol: number | null = 0;

  permission: boolean = false;

  tiposContenido: TreeNode[] = [];

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

  id_curso_object: any = {};
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

  getAllTiposContenido() {
    return this.cursosService.getAllTiposContenido().subscribe(
      (response) => {
        this.tiposContenido = response.map((tipo: any) => ({
          label: tipo.nombre_tipo_contenido,
          data: tipo.id_tipo_contenido,
        }));
        console.log(this.tiposContenido);
      },
      (err) => console.log(err)
    );
  }

  updateCourse(dato: any) {
    return this.cursosService
      .updateCourse(dato.id_curso, dato.formData)
      .subscribe(
        (respose) => {
          console.log('Actualizacion exitosa');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  createContent(content: any) {
    const finallyContent = {
      ...content,
      ...this.id_curso_object
    };
    console.log('data', finallyContent);
    const formData = new FormData();
    for (const key in finallyContent) {
      formData.append(key, finallyContent[key]);
    }
    return this.cursosService.createContent(formData).subscribe(
      (respose) => {
        console.log('Creacion exitosa');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getRoleId() {
    this.id_rol = this.cursosService.getRoleId();
  }

  ngOnInit(): void {
    this.getAllTiposContenido();

    this.getRoleId();

    this.id_curso = this.route.params.subscribe((params) => {
      this.id_curso = params['id_curso'];
      this.id_curso_object.id_curso = params['id_curso'];
      this.getCourseById(this.id_curso);
      this.getContentFromACourseById(this.id_curso);
      if (this.id_rol === 1) {
        this.cursosService
          .verifyIfAStudentIsMatriculatedIn(this.id_curso)
          .subscribe(
            (response) => {
              console.log('estudiante', response);
              this.permission = response;
            },
            (error) => {
              console.log(error);
            }
          );
      }

      if (this.id_rol === 2) {
        this.cursosService
          .verifyIfCreatorHavePermissions(this.id_curso)
          .subscribe(
            (response) => {
              console.log('creador', response);
              this.permission = response;
            },
            (error) => {
              console.log(error);
            }
          );
      }
    });
  }
}
