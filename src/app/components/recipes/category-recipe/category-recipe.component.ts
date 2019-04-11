import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/core/services/list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-recipe',
  templateUrl: './category-recipe.component.html',
  styleUrls: ['./category-recipe.component.css']
})
export class CategoryRecipeComponent implements OnInit {
  recipes;
  categoryName;
  constructor(private service: ListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      let id = data.id;
      this.service.getAllRecipes(id).subscribe((data) => {
        this.recipes = data['recipes'];
        this.categoryName = data['categoryName'];
        console.log(this.recipes)
      })
    })
   
  }

}
