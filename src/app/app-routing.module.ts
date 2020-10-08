import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {RegisterlistComponent} from './registerlist/registerlist.component';
import {ScreenshotComponent} from './screenshot/screenshot.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: RegisterlistComponent},
  {path: 'screenshot', component: ScreenshotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { LoginComponent; RegisterComponent; RegisterListComponent; ScreenshotComponent}
