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
import { MyRecipesComponent } from './components/recipes/my-recipes/my-recipes.component';
import { AdminGuard } from './core/guards/admin.guard';
import { IsAuthGuard } from './core/guards/is-auth.guard';
import { AnonymousGuard } from './core/guards/anonymous.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: CategoryRecipeComponent},
  {path: 'register', component: RegisterComponent, canActivate: [AnonymousGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AnonymousGuard]},
  {path: 'createCategory', component: CreateCategoryComponent, canActivate: [AdminGuard]},
  {path: 'addProduct', component: CreateProductComponent, canActivate: [AdminGuard]},
  {path: 'createRecipe', component: CreateRecipeComponent, canActivate: [IsAuthGuard]},
  {path: 'details/:id', component: DetailsRecipeComponent},
  {path: 'myRecipes/:id', component: MyRecipesComponent, canActivate: [IsAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
