import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private databaseService: DatabaseService) { }

  getAllCategories(): Observable<any> {
    return this.databaseService.getAllCategories()
  }

}
