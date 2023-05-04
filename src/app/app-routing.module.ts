import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'**',component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
