import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfesoresComponent } from './profesores/profesores.component';


const routes: Routes = [
  { path: '', component: LoginComponent },     
  { path: 'login', component: LoginComponent },   
  { path: 'inicio', component: InicioComponent },   
  { path: 'dashboard', component: DashboardComponent },   
  { path: 'profesores', component:ProfesoresComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
