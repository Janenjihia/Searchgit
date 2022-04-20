import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { reposComponent } from './repos/repos.component';


const routes: Routes = [
  {path:"users", component:UsersComponent},
  {path:"repos", component: reposComponent},
  // {path: "", redirectTo:"/user-profile", pathMatch:"full"},
  // {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
