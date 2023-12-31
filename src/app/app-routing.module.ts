import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/register']))
  },
  {
    path: 'about',
    component: AboutComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/register']))
  },
{path: 'login', component: LoginComponent}, 
{path: 'register', component: RegisterComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
