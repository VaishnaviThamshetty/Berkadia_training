import { Component } from '@angular/core';
import { MyService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataset = [];
  constructor(private readonly data: MyService){}
  showData() {
    this.dataset = this.data.getData();
  }
}
