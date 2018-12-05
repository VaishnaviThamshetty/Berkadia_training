
import { Component, OnInit, Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
      @Input() Novels:string[];
      @Output() valueChange = new EventEmitter<number>();
      count=0;
      constructor() { }

      ngOnInit() {
      }

      count_value(){
      this.count++;
      this.valueChange.emit(this.count);
   }
}


