import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ProjectComponent } from "./pages/project/project.component";
import { ProjectAddComponent } from "./pages/project/project-add.component";
import { ProjectEditComponent } from "./pages/project/project-edit.component";

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "admin", component: AdminComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "project/:id", component: ProjectComponent},
  {path: "project/add", component: ProjectAddComponent},
  {path: "project/edit", component: ProjectEditComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
