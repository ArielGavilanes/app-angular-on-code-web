import { HttpClient } from '@angular/common/http';
import { AbstractType, Injectable } from '@angular/core';
import { environment } from 'environment';
import { Observable } from 'rxjs';
import { Register } from './interface/register.interface';
import { Roles } from './interface/roles.interface';
import { Login } from './interface/login.interface';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.BASE_URL;

  getAllRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(this.baseUrl + '/roles');
  }

  registerUser(user: Register): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/auth/register/', user);
  }

  loginUser(payload: Login): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/auth/login/', payload);
  }

  getAllCategories(): Observable<any> {
    //cambiar tipo any por un array interfaz de categorias
    return this.http.get<any>(this.baseUrl + '/categorias');
  }

  getCoursesByCategoryName(nombre_categoria: string): Observable<any> {
    //cambiar tipo any por un array interfaz de curso
    return this.http.get<any>(
      this.baseUrl + '/cursos/categoria/' + nombre_categoria + '/'
    );
  }

  searchCursos(query_curso: string): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + '/cursos/search?nombre_curso=' + query_curso
    );
  }

  getCourseById(id_curso: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/cursos/' + id_curso);
  }

  getContentFromACourseById(id_curso: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/contenido/' + id_curso);
  }

  createCourse(curso: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/cursos/', curso);
  }

  getProfile(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/auth/profile/');
  }

  verifyIfCreatorHavePermissions(id_curso: number): Observable<boolean> {
    return this.http.get<boolean>(this.baseUrl + '/cursos/access/' + id_curso);
  }

  verifyIfAStudentIsMatriculatedIn(id_curso: number): Observable<boolean> {
    return this.http.get<boolean>(
      this.baseUrl + '/matriculas/access/' + id_curso
    );
  }

  updateCourse(id_curso: number, curso: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/cursos/' + id_curso, curso);
  }

  getAllTiposContenido(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/tipo_contenido/');
  }

  createContent(content: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/contenido/', content);
  }

  createMatricula(matricula: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/matriculas/', matricula);
  }
  getCoursesWhereStudentsAreMatriculatedIn(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/matriculas/cursos');
  }

  getMatriculeOfTheLast3Days(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/matriculas/estadistica');
  }

  updateUserDataProfile(foto_perfil: any) {
    return this.http.put<any>(
      this.baseUrl + '/users-data/profile',
      foto_perfil
    );
  }

  updateUserDataCover(foto_portada: any) {
    return this.http.put<any>(this.baseUrl + '/users-data/cover', foto_portada);
  }

  getCoursesByCreatorId() {
    return this.http.get<any>(this.baseUrl + '/cursos/creador/');
  }
}
