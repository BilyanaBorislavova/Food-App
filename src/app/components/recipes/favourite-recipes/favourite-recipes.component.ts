import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/core/services/list.service';

@Component({
  selector: 'app-favourite-recipes',
  templateUrl: './favourite-recipes.component.html',
  styleUrls: ['./favourite-recipes.component.css']
})
export class FavouriteRecipesComponent implements OnInit {
  recipes;
  currentUser;
  show;
  hide;
  details;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('userId');
    this.show = false;
    this.hide = true;
    this.details = false;
    this.listService.getFavouriteRecipes(this.currentUser).subscribe((data) => {
      this.recipes = data['recipes'];
    })
  }

}
