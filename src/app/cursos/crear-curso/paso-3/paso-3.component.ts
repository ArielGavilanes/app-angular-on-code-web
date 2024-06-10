import { Component } from '@angular/core';
import { CrearCursoService } from '../service/crear-curso.service';
import { response } from 'express';

@Component({
  selector: 'app-paso-3',
  templateUrl: './paso-3.component.html',
  styleUrls: ['./paso-3.component.css'],
})
export class Paso3Component {
  constructor(private crearCursoService: CrearCursoService) {}

  uploaded: boolean = false;

  data: any = {};

  uploadedFile: any = null;

  onUpload(event: any) {
    if (event.files.length > 0) {
      this.uploaded = true;
      this.uploadedFile = event.files[0];
      console.log(this.uploadedFile);
      this.data.portada_curso = this.uploadedFile;
      this.crearCursoService.recopilateInformation(this.data);
    }
  }

  onSubmit() {
    this.crearCursoService.createCourse().subscribe(
      (response) => {
        console.log('Creacion exitosa', response);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
