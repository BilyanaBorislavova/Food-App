import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private readonly createCategoryUrl = 'http://localhost:8000/create/createCategory';
  private readonly createProductUrl = 'http://localhost:8000/create/addProduct';
  private readonly createRecipeUrl = 'http://localhost:8000/create/addRecipe'; 
  private readonly deleteRecipeUrl = 'http://localhost:8000/create/deleteRecipe/';

  constructor(private http: HttpClient) { }

  createCategory(category) {
    return this.http.post(this.createCategoryUrl, category);
  }

  createProduct(product) {
    return this.http.post(this.createProductUrl, product);
  }

  createRecipe(recipe) {
    return this.http.post(this.createRecipeUrl, recipe);
  }

  deleteRecipe(id) {
    return this.http.get(this.deleteRecipeUrl + id);
  }

}
