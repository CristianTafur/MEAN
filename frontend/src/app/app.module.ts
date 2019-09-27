import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componenets/nav/nav.component';
import { LogComponent } from './componenets/log/log.component';
import { SingComponent } from './componenets/sing/sing.component';
import { UserListComponent } from './componenets/user-list/user-list.component';
import { UserListFacturesComponent } from './componenets/user-list-factures/user-list-factures.component';
import { HomeComponent } from './componenets/home/home.component';
import { Page404Component } from './componenets/page404/page404.component'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LogComponent,
    SingComponent,
    UserListComponent,
    UserListFacturesComponent,
    HomeComponent,
    Page404Component 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
