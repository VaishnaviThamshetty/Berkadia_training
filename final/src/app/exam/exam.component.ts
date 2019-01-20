import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  public question;
  quesDetails;
  constructor(private readonly airApi:DataService) { }

  ngOnInit() {
      this.question=this.airApi.getData('https://api.myjson.com/bins/gij7c').subscribe((res:any)=>{
      this.quesDetails=res.results;
      console.log(this.quesDetails);
    })
  }
  
  /*getDetails(selectans){
    this.selected_ans=selectans;
    this.selectans=this.dataApi.getAns('https://api.myjson.com/bins/gij7c?correct_answer=${selectans}').subscribe((res:any)=>{
    this.ansDetails=res.results;
    console.log(this.ansDetails);
  });
}*/
}

