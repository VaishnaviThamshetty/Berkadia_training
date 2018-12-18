import { Component, OnInit } from '@angular/core';
import { MyService } from './service';

@Component({
  selector: 'app-rating-employee',
  templateUrl: './rating-employee.component.html',
  styleUrls: ['./rating-employee.component.css']
})
export class RatingEmployeeComponent {
  dataset = [];
  constructor(private readonly data: MyService ){}
  showData() {
    this.dataset = this.data.getData();

  }

}
