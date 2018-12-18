import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  getData(): any {
    return [
        {
      "name":"Vaishu",
      "id":"355",
      "rating":"4.3"
      },
      {
        "name":"Anjali",
        "id":"348",
        "rating":"4.4"
          },
      {
        "name":"Kuttu",
        "id":"354",
        "rating":"4.0"
             },
      {
        "name":"Hari",
        "id":"356",
        "rating":"3.3"
      },
      {
        "name":"Sahithi",
        "id":"318",
        "rating":"4.0"
      }
    ];
  }
}
