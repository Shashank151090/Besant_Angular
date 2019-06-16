import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { NewComponent } from './new/new.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'new', component: NewComponent },
  { path: 'user', component: UserComponent },
  { path: 'lifeCycle', component: LifecycleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', loadChildren: './user/user.module#UserModule' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
