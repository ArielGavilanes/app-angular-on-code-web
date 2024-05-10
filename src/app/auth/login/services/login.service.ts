import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';
import { Login } from 'src/app/database/interface/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private databaseService: DatabaseService) { }

  loginUser(payload: Login) {
    return this.databaseService.loginUser(payload)
  }
}
