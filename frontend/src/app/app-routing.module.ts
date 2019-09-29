import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './componenets/home/home.component';
import { UserListComponent } from './componenets/user-list/user-list.component';
import { UserListFacturesComponent } from './componenets/user-list-factures/user-list-factures.component';
import { Page404Component } from './componenets/page404/page404.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'usuarios',component:UserListComponent},
  {path:'usuarios/facturas/:persona/:emision',component:UserListFacturesComponent},
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
