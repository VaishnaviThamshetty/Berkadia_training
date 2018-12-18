import { Component, OnInit } from '@angular/core';
import { MyService } from './service';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
  dataset = [];
  constructor(private readonly data: MyService ){}
  showData() {
    this.dataset = this.data.getData();

}
}
