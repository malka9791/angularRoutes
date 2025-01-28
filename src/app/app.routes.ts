import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from './app.component';
import { CustomersComponent } from '../customers/customers.component';
import { loginGuard } from '../guards/login.guard';
import { ClientDetailsComponent } from '../client-details/client-details.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'customers',
    component: CustomersComponent,
    canActivate: [loginGuard],
  },
  { path: 'client/:id', component: ClientDetailsComponent },
];
