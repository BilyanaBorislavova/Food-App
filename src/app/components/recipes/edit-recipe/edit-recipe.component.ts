import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/core/services/list.service';
import { Recipe } from 'src/app/core/models/recipe';
import { ActivatedRoute } from '@angular/router';
import { CreateService } from 'src/app/core/services/create.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  recipe: Recipe;

  constructor(private listService: ListService, private route: ActivatedRoute, private crud: CreateService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      let id = data['id'];

      this.listService.getRecipeDetails(id).subscribe(data => {
        this.recipe = data['recipe'];
      })
    });
  }

  editRecipe(id) {
    this.crud.editRecipe(id, this.recipe).subscribe(data => {
      console.log(data);
    })
  }


}
