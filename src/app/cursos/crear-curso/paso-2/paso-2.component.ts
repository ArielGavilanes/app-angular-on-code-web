import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nonNegativeNumberValidator } from 'src/app/validators/non-Negative.validator';
import { CrearCursoService } from '../service/crear-curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso-2',
  templateUrl: './paso-2.component.html',
  styleUrls: ['./paso-2.component.css'],
})
export class Paso2Component {
  constructor(
    private crearCursoService: CrearCursoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createCourseForm = this.formBuilder.group({
      precio_curso: [
        { value: 0, disabled: false },
        [Validators.required, nonNegativeNumberValidator()],
      ],
    });
  }

  premium_curso: boolean = false;

  createCourseForm: FormGroup = new FormGroup({});

  formSubmitted: boolean = false;

  data: any = {};

  con_certificacion: boolean = false;

  onSubmit() {
    this.data.con_certificacion = this.con_certificacion;
    this.data.premium_curso = this.premium_curso;
    this.data.precio_curso = this.createCourseForm.get('precio_curso')?.value;
    this.formSubmitted = true;
    if (this.createCourseForm.valid) {
      if (!this.premium_curso) {
        this.data.precio_curso = 0;
      }
      this.router.navigate(['/cursos/create/step-3']);
      this.crearCursoService.recopilateInformation(this.data);
    }
  }

  togglePrecioCursoControl() {
    const precioCursoControl = this.createCourseForm.get('precio_curso');
    if (!this.premium_curso) {
      precioCursoControl?.enable();
    } else {
      precioCursoControl?.disable();
      precioCursoControl?.setValue(precioCursoControl?.value); // Mantener el valor al deshabilitar
    }
  }
}
