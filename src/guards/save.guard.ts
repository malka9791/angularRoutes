import { CanActivateFn } from '@angular/router';

export const saveGuard: CanActivateFn = (route, state) => {
  return true;
};
