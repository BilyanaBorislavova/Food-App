import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "../../components/authentication/register/register.component";
import { LoginComponent } from "../../components/authentication/login/login.component";
import { HomeComponent } from "../../components/home/home.component";
import { NavigationComponent } from "../../components/shared/navigation/navigation/navigation.component";
import { AppComponent } from "../../app.component";
import { CreateCategoryComponent } from "../../components/categories/create-category/create-category.component";
import { CreateProductComponent } from "../../components/products/create-product/create-product.component";
import { CreateRecipeComponent } from "../../components/recipes/create-recipe/create-recipe.component";
import { DetailsRecipeComponent } from "../../components/recipes/details-recipe/details-recipe.component";
import { CategoryRecipeComponent } from "../../components/recipes/category-recipe/category-recipe.component";
import { MyRecipesComponent } from "../../components/recipes/my-recipes/my-recipes.component";
import { RecipeInfoComponent } from "../../components/recipes/recipe-info/recipe-info.component";
import { FavouriteRecipesComponent } from "../../components/recipes/favourite-recipes/favourite-recipes.component";
import { EditRecipeComponent } from "../../components/recipes/edit-recipe/edit-recipe.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    CreateCategoryComponent,
    CreateProductComponent,
    CreateRecipeComponent,
    DetailsRecipeComponent,
    CategoryRecipeComponent,
    MyRecipesComponent,
    RecipeInfoComponent,
    FavouriteRecipesComponent,
    EditRecipeComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterModule, FormsModule],
  exports: [
    CreateCategoryComponent,
    CreateProductComponent,
    CreateRecipeComponent,
    DetailsRecipeComponent,
    CategoryRecipeComponent,
    MyRecipesComponent,
    RecipeInfoComponent,
    FavouriteRecipesComponent,
    EditRecipeComponent
  ]
})
export class FoodModule {}
