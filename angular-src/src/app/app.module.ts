import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"
import { UserApiService } from "./services/user-api.service"
import { ProjectApiService } from "./services/project-api.service"
import { FlashMessagesModule } from "angular2-flash-messages"

import { AppComponent } from './app.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectAddComponent } from './pages/project/project-add.component';
import { ProjectEditComponent } from './pages/project/project-edit.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    FlashMessagesModule
  ],
  providers: [UserApiService, ProjectApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
