import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '../models/login.model';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-login',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  id: number = 1;
  mail: string = '';
  password: string = '';
  isAuthen: boolean = false;
  constructor(private dataService: DataService) {}

  onSubmit() {
    this.dataService.addData(new Data(this.id++, this.mail, this.password));
    this.isAuthenticated();
  }
  isAuthenticated() {
    this.isAuthen = true;
    localStorage.setItem('isAuthenticated', 'true');
  }
}
