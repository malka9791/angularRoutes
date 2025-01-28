import { Component, OnInit } from '@angular/core';
import { Data } from '../models/login.model';
import { DataService } from '../services/data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [RouterLink],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  constructor(private listService: DataService) {}
  
  list: Data[] = [];
  ngOnInit(): void {
    this.list = this.listService.getData();
  }

}
