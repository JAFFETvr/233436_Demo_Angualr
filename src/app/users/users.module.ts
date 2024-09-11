import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 



@NgModule({
  declarations: [
    UsersDashboardComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    MatSlideToggleModule
  ],
  exports: [
    UsersDashboardComponent
  ]
})
export class UsersModule { }
