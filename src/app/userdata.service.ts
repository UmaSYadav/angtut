import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  getAllData() {
    return [
      {name: "Uma", age: 32, email: "uma.yadav@aavn.ooo"},
      {name: "Shankar", age: 30, email: "shankar.yadav@aavn.ooo"},
      {name: "adav", age: 28, email: "yadu.yadav@aavn.ooo"}
    ];
  }
}
