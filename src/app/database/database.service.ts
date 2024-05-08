import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { Observable } from 'rxjs';
import { Register } from './interface/register.interface';
import { Roles } from './interface/roles.interface';

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
}
