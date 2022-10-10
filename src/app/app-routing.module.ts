import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [
  {
    path: 'UserModule', redirectTo:'UserModule/user/create',pathMatch:"full"
   
  },
  {
    path: 'UserModule/user',
    children: [
      {
        path: 'create',
        loadChildren:() =>  import('./create-user/create-user.module').then(({CreateUserModule}) => CreateUserModule)
      },
      {
        path: 'view',
        loadChildren:() =>  import('./view-user/view-user.module').then(({ViewUserModule}) => ViewUserModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ BrowserModule,RouterModule]
})
export class AppRoutingModule { }
