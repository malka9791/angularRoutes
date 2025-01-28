import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Data } from '../models/login.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-client-details',
  imports: [JsonPipe],
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.css',
})
export class ClientDetailsComponent {
  clientId: number | undefined;
  curentClient: Data | undefined;
  constructor(
    private activateRoute: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.clientId = +id;
        this.curentClient = this.dataService.getById(this.clientId);
      } else {
        console.log('invalid id');
      }
    });
  }
}
