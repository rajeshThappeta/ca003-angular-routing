import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactjsComponent } from './reactjs/reactjs.component';
import { RegisterComponent } from './register/register.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VueComponent } from './vue/vue.component';

const routes: Routes = [
  //route for Home
  { path:'home',component: HomeComponent},
  //route gor Register
  { path:"register",component:RegisterComponent},
  //route for Login
  {path:'login',component:LoginComponent},
  //route for Technologires
  { path:"technologies",
    component:TechnologiesComponent, 
    children:[
                { path:'react',component:ReactjsComponent},
                { path:'angular',component:AngularComponent},
                { path:'vue',component:VueComponent},
                { path:"",redirectTo:'react',pathMatch:"full"} 
  ]},
  //route for userprofile
  { path:"user-profile/:username",component:UserProfileComponent},
  //redirect to Home
  { path:"",redirectTo:'home',pathMatch:'full'},
  //dealing with invalid path
  { path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
