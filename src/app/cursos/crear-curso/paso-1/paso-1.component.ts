import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreeNode } from 'primeng/api';
import { DatabaseService } from 'src/app/database/database.service';
import { CrearCursoService } from '../service/crear-curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso-1',
  templateUrl: './paso-1.component.html',
  styleUrls: ['./paso-1.component.css'],
})
export class Paso1Component implements OnInit {
  constructor(
    private databaseService: DatabaseService,
    private formBuilder: FormBuilder,
    private crearCursoService: CrearCursoService,
    private router: Router
  ) {
    this.createCourseForm = this.formBuilder.group({
      nombre_curso: ['', [Validators.required]],
      descripcion_curso: ['', [Validators.required]],
      id_categoria: ['', [Validators.required]],
    });
  }

  createCourseForm: FormGroup = new FormGroup({});

  formSubmitted: boolean = false;

  data: any = {};

  categorias: TreeNode[] = [];

  onSubmit() {
    this.data.nombre_curso = this.createCourseForm.get('nombre_curso')?.value;

    this.data.descripcion_curso =
      this.createCourseForm.get('descripcion_curso')?.value;

    this.data.id_categoria =
      this.createCourseForm.get('id_categoria')?.value.data;

    this.formSubmitted = true;

    if (this.createCourseForm.valid) {
      this.router.navigate(['/cursos/create/step-2']);
      this.crearCursoService.recopilateInformation(this.data);
    }
  }

  getAllCategories() {
    return this.databaseService.getAllCategories().subscribe(
      (response) => {
        this.categorias = response.map((categoria: any) => ({
          label:
            categoria.nombre_categoria.charAt(0).toUpperCase() +
            categoria.nombre_categoria.slice(1),
          data: categoria.id_categoria,
        }));
      },
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {
    this.getAllCategories();
  }
}
