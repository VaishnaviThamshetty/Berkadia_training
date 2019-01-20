import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { EndComponent } from './end/end.component';

const routes: Routes = [
  {path:'exam',component:ExamComponent},
  {path:'end',component:EndComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
