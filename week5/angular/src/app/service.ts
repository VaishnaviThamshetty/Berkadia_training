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
      "phonenumber":"9618952168",
      "Yearofjoining":"2016"
      },
      {
        "name":"Anjali",
        "id":"348",
        "phonenumber":"9616574356",
        "Yearofjoining":"2015"
      },
      {
        "name":"Kuttu",
        "id":"354",
        "phonenumber":"9578342534",
        "Yearofjoining":"2017"
      },
      {
        "name":"Hari",
        "id":"356",
        "phonenumber":"9456789456",
        "Yearofjoining":"2013"
      },
      {
        "name":"Sahithi",
        "id":"318",
        "phonenumber":"956312518",
        "Yearofjoining":"2016"
      }
    ];
  }


}