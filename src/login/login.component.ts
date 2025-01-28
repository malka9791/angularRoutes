import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Data } from '../models/login.model';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-login',
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatSelectModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent {

  mail:string="";
  password:string="";
  constructor(private dataService:DataService){}
onSubmit()
{
this.dataService.addData(new Data(this.mail,this.password))
console.log(this.dataService.getData());

}
}
