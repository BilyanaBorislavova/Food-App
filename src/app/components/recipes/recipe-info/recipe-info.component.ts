import { Component, OnInit, Input } from "@angular/core";
import { CreateService } from "src/app/core/services/create.service";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/core/services/authentication.service";

@Component({
  selector: "app-recipe-info",
  templateUrl: "./recipe-info.component.html",
  styleUrls: ["./recipe-info.component.css"]
})
export class RecipeInfoComponent implements OnInit {
  @Input() recipes;
  @Input() currentUser;
  @Input() show;
  @Input() hide;
  @Input() isAdmin;
  @Input() details;
  @Input() categoryName;
  currentUserId;

  constructor(
    private authService: AuthenticationService,
    private crudService: CreateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentUserId = this.authService.isAuth();
  }

  deleteRecipe(id) {
    this.crudService.deleteRecipe(id).subscribe(data => {
      this.router.navigate(["/home"]);
    });
  }

  removeFromFavourites(recipeId, userId) {
    this.crudService.removeFromFavourites(recipeId, userId).subscribe((data) => {
      this.router.navigate(['/home']);
    })
  }

  addToFavourites(recipeId, userId) {
    this.crudService.addToFavourites(recipeId, userId).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }
}
