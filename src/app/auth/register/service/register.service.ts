import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private databaseService: DatabaseService) {}

  getAllRoles() {
    return this.databaseService.getAllRoles();
  }

  registerUser(user: any) {
    return this.databaseService.registerUser(user)
  }
}
