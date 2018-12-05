import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  result=0;
  Novels:string[]=["Anna Karenina", 
"Madame Bovary",
"War and Peace",
"The Great Gats",
"Lolita",
"Middlemarch",
"The Adventures of Huckleberry Finn",
"The Stories of Anton Chekhov"]

  displayCount(count) {
    console.log(count);
    this.result=count;
}
  constructor() { }
  

  ngOnInit() {
  }

}

