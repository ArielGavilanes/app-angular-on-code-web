import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const expectedRoleId = route.data['expectedRoleId'];
    const currentUserRoleId = this.authService.getRoleId();

    if (currentUserRoleId === expectedRoleId) {
      return true;
    } else {
      return this.router.parseUrl('/dashboard');
    }
  }
}
