import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import { Jwt } from '../interfaces/jwt.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService) {}

  isLoggedIn(): boolean {
    const token = this.cookieService.get('token');
    return !!token;
  }

  getRoleId() {
    const token = this.cookieService.get('token');
    if (token) {
      try {
        const decoded: Jwt = jwtDecode(token);
        return decoded.id_rol;
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }
}
