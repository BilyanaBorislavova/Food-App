import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/core/models/recipe';
import { ListService } from 'src/app/core/services/list.service';

@Component({
  selector: 'app-details-recipe',
  templateUrl: './details-recipe.component.html',
  styleUrls: ['./details-recipe.component.css']
})
export class DetailsRecipeComponent implements OnInit {
  recipe: Recipe
  currentUser;
  constructor(private route: ActivatedRoute, private service: ListService) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('userId');
    this.route.params.subscribe((data) => {
       this.service.getRecipeDetails(data.id).subscribe((data) => {
         this.recipe = data['recipe'];
         console.log(this.recipe)
       })
    });
    
  }

}
