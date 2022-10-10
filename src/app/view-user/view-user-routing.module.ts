import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ViewUserComponent } from './view-user.component';


const routes: Routes = [
  {
    path: '',
    component: ViewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewUserRoutingModule { }