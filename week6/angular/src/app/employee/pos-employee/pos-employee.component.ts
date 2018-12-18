import { Component, OnInit } from '@angular/core';
import { MyService } from './service';
@Component({
  selector: 'app-pos-employee',
  templateUrl: './pos-employee.component.html',
  styleUrls: ['./pos-employee.component.css']
})
export class PosEmployeeComponent {

    dataset = [];
    constructor(private readonly data: MyService ){}
    showData() {
      this.dataset = this.data.getData();
  
  }
  }
  