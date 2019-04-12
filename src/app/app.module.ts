import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./components/authentication/register/register.component";
import { LoginComponent } from "./components/authentication/login/login.component";
import { HomeComponent } from "./components/home/home/home.component";
import { NavigationComponent } from "./components/shared/navigation/navigation/navigation.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CreateCategoryComponent } from "./components/categories/create-category/create-category.component";
import { CreateProductComponent } from "./components/products/create-product/create-product.component";
import { CreateRecipeComponent } from "./components/recipes/create-recipe/create-recipe.component";
import { DetailsRecipeComponent } from "./components/recipes/details-recipe/details-recipe.component";
import { CategoryRecipeComponent } from "./components/recipes/category-recipe/category-recipe.component";
import { MyRecipesComponent } from "./components/recipes/my-recipes/my-recipes.component";
import { AdminGuard } from "./core/guards/admin.guard";
import { IsAuthGuard } from "./core/guards/is-auth.guard";
import { AnonymousGuard } from './core/guards/anonymous.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    CreateCategoryComponent,
    CreateProductComponent,
    CreateRecipeComponent,
    DetailsRecipeComponent,
    CategoryRecipeComponent,
    MyRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AdminGuard, IsAuthGuard, AnonymousGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
