import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/database/database.service';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private databaseService: DatabaseService) {}

  getCourseById(id_curso: number): Observable<any> {
    return this.databaseService.getCourseById(id_curso);
  }

  getContentFromACourseById(id_curso: number): Observable<any> {
    return this.databaseService.getContentFromACourseById(id_curso);
  }
}
