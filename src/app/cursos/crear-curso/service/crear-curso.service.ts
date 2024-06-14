import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';

@Injectable({
  providedIn: 'root',
})
export class CrearCursoService {
  constructor(private databaseService: DatabaseService) {}

  curso: any = {
    id_creador: 10,
  };

  recopilateInformation(data: any) {
    this.curso = {
      ...this.curso,
      ...data,
    };
  }

  createCourse() {
    const formData = new FormData();
    for (const key in this.curso) {
      formData.append(key, this.curso[key]);
    }
    return this.databaseService.createCourse(formData);
  }
}
