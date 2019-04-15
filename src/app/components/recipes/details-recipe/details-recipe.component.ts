import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "src/app/core/models/recipe";
import { ListService } from "src/app/core/services/list.service";
import { CreateService } from "src/app/core/services/create.service";
import { AuthenticationService } from "src/app/core/services/authentication.service";

@Component({
  selector: "app-details-recipe",
  templateUrl: "./details-recipe.component.html",
  styleUrls: ["./details-recipe.component.css"]
})
export class DetailsRecipeComponent implements OnInit {
  recipes;
  currentUser;
  constructor(
    private route: ActivatedRoute,
    private service: ListService,
    private crud: CreateService,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.isAuth();

    this.route.params.subscribe(data => {
      this.service.getRecipeDetails(data.id).subscribe(data => {
        this.recipes = data["recipe"];
        this.recipes = [this.recipes];
      });
    });
  }

  deleteRecipe(id) {
    this.crud.deleteRecipe(id).subscribe(data => {
      this.router.navigate(["home"]);
    });
  }
}
