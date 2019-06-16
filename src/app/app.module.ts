import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { NewComponent } from './new/new.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserPostComponent } from './user/userPost/userPost.component';
import { UserCommentsComponent } from './user/userComments/userComments.component';
import { Custom } from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    NewComponent,
    DashboardComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    UserPostComponent,
    UserCommentsComponent,
    Custom
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
