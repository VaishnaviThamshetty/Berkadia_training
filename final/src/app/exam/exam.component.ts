import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as $ from 'node_modules/jquery/dist/jquery';
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
    var counter = $("counter");
     $(document).ready(function(){
                $('#AddButton').click( function() {
                    var counter = $('#TextBox').val();
                    counter++ ;
                    $('#TextBox').val(counter);
                });
            });

      this.question=this.airApi.getData('https://api.myjson.com/bins/gij7c').subscribe((res:any)=>{
      this.quesDetails=res.results;
      console.log(this.quesDetails);
    })
  }
}



