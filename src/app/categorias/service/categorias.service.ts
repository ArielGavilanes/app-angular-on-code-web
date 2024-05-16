import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private databaseService: DatabaseService) { }

  getCoursesByCategoryName(nombre_categoria: string): Observable<any> {
    return this.databaseService.getCoursesByCategoryName(nombre_categoria)
  }

}
