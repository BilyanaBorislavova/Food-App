import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ListService } from 'src/app/core/services/list.service';

@Component({
  selector: 'app-favourite-recipes',
  templateUrl: './favourite-recipes.component.html',
  styleUrls: ['./favourite-recipes.component.css']
})
export class FavouriteRecipesComponent implements OnInit {
  recipes;
  currentUser;

  constructor(private authService: AuthenticationService, private listService: ListService) { }

  ngOnInit() {
    this.currentUser = this.authService.isAuth();
    this.listService.getFavouriteRecipes(this.currentUser).subscribe((data) => {
      this.recipes = data['recipes'];
    })
  }

}
