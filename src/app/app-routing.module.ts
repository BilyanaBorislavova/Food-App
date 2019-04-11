import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { CreateCategoryComponent } from './components/categories/create-category/create-category.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { CreateRecipeComponent } from './components/recipes/create-recipe/create-recipe.component';
import { DetailsRecipeComponent } from './components/recipes/details-recipe/details-recipe.component';
import { CategoryRecipeComponent } from './components/recipes/category-recipe/category-recipe.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: CategoryRecipeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createCategory', component: CreateCategoryComponent},
  {path: 'addProduct', component: CreateProductComponent},
  {path: 'createRecipe', component: CreateRecipeComponent},
  {path: 'details/:id', component: DetailsRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
