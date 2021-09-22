import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SetIpComponent } from './set-ip/set-ip.component';

const routes :Routes = [
  {
    path: '',
    redirectTo: '/setIp',
    pathMatch: 'full',

  },
  {

  path: 'login',
  component:  LoginComponent,
  },

  {
  path: 'table',
  component: TableComponent,
},
{
  path: 'setIp',
  component: SetIpComponent,
}
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LoginComponent,
    SetIpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
