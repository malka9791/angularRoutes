import { CanActivateFn, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }

  return true;

};
