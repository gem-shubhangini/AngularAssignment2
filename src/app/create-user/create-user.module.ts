import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserRoutingModule } from './create-user-routing.module';
import { CreateUserComponent } from './create-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CreateUserRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [CreateUserComponent]
})
export class CreateUserModule { }