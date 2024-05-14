import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'; // Agrega esta importación

import { AuthGuard } from '../guard/auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule], // Agrega RouterTestingModule aquí
      providers: [AuthGuard]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should return false and redirect to login if user is not logged in', () => {
    spyOn(guard['authService'], 'isLoggedIn').and.returnValue(false);
    const routerSpy = spyOn(TestBed.inject(Router), 'createUrlTree').and.callThrough();
    const canActivate = guard.canActivate(new ActivatedRouteSnapshot(), { url: 'dummy-url' } as RouterStateSnapshot);
    expect(canActivate).toBe(false);
    expect(routerSpy).toHaveBeenCalledWith(['/login'], { queryParams: { returnUrl: 'dummy-url' } });
  });
});
