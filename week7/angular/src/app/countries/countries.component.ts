import { Component, OnInit } from '@angular/core';
import { AirService } from '../air.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public cont;
  contDetails;
  constructor(private readonly airApi:AirService) { }

  ngOnInit() {
      this.cont=this.airApi.getData('https://api.openaq.org/v1/countries').subscribe((res:any)=>{
      this.contDetails=res.results;
      console.log(this.contDetails);
    })
  }

}
