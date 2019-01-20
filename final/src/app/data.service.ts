import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http:HttpClient) { }
  getData(apiURL:string){
    return this.http.get(apiURL);
  }
  getAns(apiURL:string){
    return this.http.get(apiURL);
  }
 
}