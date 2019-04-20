import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { ListService } from 'src/app/core/services/list.service';
import { Recipe } from 'src/app/core/models/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateService } from 'src/app/core/services/create.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  form: FormGroup;
  recipe: Recipe;

  constructor(private listService: ListService,
     private route: ActivatedRoute,
     private fb: FormBuilder,
     private crud: CreateService,
     private router: Router
        ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      let id = data['id'];

      this.listService.getRecipeDetails(id).subscribe(data => {
        this.recipe = data['recipe'];
      })
    });

    this.form = this.fb.group({
      name: ['']
    })
  } 

  editRecipe(id) {
    const body = this.form.value;
    this.crud.editRecipe(id, this.recipe).subscribe(data => {
      this.router.navigate(['home']);
    })
  }


}
