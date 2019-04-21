import { Component, OnInit, OnChanges, ViewChild } from "@angular/core";
import { ListService } from "src/app/core/services/list.service";
import { Recipe } from "src/app/core/models/recipe";
import { ActivatedRoute, Router } from "@angular/router";
import { CreateService } from "src/app/core/services/create.service";
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from "@angular/forms";


@Component({
  selector: "app-edit-recipe",
  templateUrl: "./edit-recipe.component.html",
  styleUrls: ["./edit-recipe.component.css"]
})
export class EditRecipeComponent implements OnInit {
  recipe: Recipe;
  form: FormGroup;

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    private crud: CreateService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params["id"];

    this.listService.getRecipeDetails(id).subscribe(data => {
      this.recipe = data["recipe"];
      this.form = this.fb.group({
        name: new FormControl(this.recipe.name, {updateOn: 'change'}),
        photo: new FormControl(this.recipe.photo, {updateOn: 'change'}),
        description: new FormControl(this.recipe.description, {updateOn: 'change'})
      })
    });
  }

  editRecipe(id) {
    this.crud.editRecipe(id, this.form.value).subscribe(data => {
     // this.form = new FormGroup({
       // name: new FormControl(this.form.value.name, {updateOn: 'submit'}),
        //photo: new FormControl(this.form.value.photo, {updateOn: 'submit'}),
        //description: new FormControl(this.form.value.description, {updateOn: 'submit'})
      //})
      this.router.navigate(['home']);
    });
  }
}
