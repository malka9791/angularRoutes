import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
list:Data[]=[];
  constructor() {}
    
   addData(data:Data)
   {
      this.list.push(data);
   }
   getData()
   {
    return this.list;
   }

}
