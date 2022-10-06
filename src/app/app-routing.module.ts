import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductComponent } from './component/product/product.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:MainComponent},
  {path:'product',  component:ProductComponent},
  // {path:'product/:id', component:ProductDetailsComponent},
  {path:'productdetails', component:ProductDetailsComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  { path:'**', component: NotFoundComponent },




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
