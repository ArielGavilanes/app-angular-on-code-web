import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DatabaseService } from 'src/app/database/database.service';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(
    private databaseService: DatabaseService,
    private authService: AuthService
  ) {}

  getCourseById(id_curso: number): Observable<any> {
    return this.databaseService.getCourseById(id_curso);
  }

  getContentFromACourseById(id_curso: number): Observable<any> {
    return this.databaseService.getContentFromACourseById(id_curso);
  }

  verifyIfCreatorHavePermissions(id_curso: number): Observable<boolean> {
    return this.databaseService.verifyIfCreatorHavePermissions(id_curso);
  }

  verifyIfAStudentIsMatriculatedIn(id_curso: number): Observable<boolean> {
    return this.databaseService.verifyIfAStudentIsMatriculatedIn(id_curso);
  }

  getRoleId() {
    return this.authService.getRoleId();
  }

  updateCourse(id_curso: number, curso: any): Observable<any> {
    return this.databaseService.updateCourse(id_curso, curso);
  }

  getAllTiposContenido(): Observable<any> {
    return this.databaseService.getAllTiposContenido();
  }

  createContent(content: any): Observable<any> {
    return this.databaseService.createContent(content);
  }

  createMatricula(matricula: any): Observable<any> {
    return this.databaseService.createMatricula(matricula);
  }
}
