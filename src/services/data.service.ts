import { Injectable } from '@angular/core';
import { Data } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  list: Data[] = [];
  constructor() {}

  addData(data: Data) {
    this.list.push(data);
  }
  getData() {
    return this.list;
  }
  getById(id: number) {
    return this.list.find((x) => x.id == id);
  }
}
