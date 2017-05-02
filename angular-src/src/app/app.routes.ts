import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ProjectComponent } from "./pages/project/project.component";
import { ProjectAddComponent } from "./pages/project/project-add.component";
import { ProjectEditComponent } from "./pages/project/project-edit.component";
import { ProfileComponent } from "./pages/profile/profile.component"

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "admin", component: AdminComponent},
  {path: "profile", component: ProfileComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "projects/add", component: ProjectAddComponent},
  {path: "projects/edit/:id", component: ProjectEditComponent},
  {path: "project/:id", component: ProjectComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
