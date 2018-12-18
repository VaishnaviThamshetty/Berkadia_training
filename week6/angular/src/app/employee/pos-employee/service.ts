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
      "position":"White-box Tester"
      },
      {
        "name":"Anjali",
        "id":"348",
        "position":"Recruitment Manager"
      },
      {
        "name":"Kuttu",
        "id":"354",
        "position":"Web Programer"
        
      },
      {
        "name":"Hari",
        "id":"356",
        "position":"Full-Stack Developer"
        
      },
      {
        "name":"Sahithi",
        "id":"318",
        "position":"IT Monior"
    }
    ];
  }


}