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
}
