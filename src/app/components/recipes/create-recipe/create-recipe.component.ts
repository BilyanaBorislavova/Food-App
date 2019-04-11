import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, Validators, FormArray, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ListService } from "src/app/core/services/list.service";
import { CreateService } from "src/app/core/services/create.service";
import { Observable } from "rxjs";
import { Category } from "src/app/core/models/category";
import { Product } from 'src/app/core/models/product';

@Component({
  selector: "app-create-recipe",
  templateUrl: "./create-recipe.component.html",
  styleUrls: ["./create-recipe.component.css"]
})
export class CreateRecipeComponent implements OnInit {
  @Input() categories: Array<Category>;
  @Input() allProducts: Array<Product>;
  form;
  currentUser;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private listService: ListService,
    private createService: CreateService
  ) {}

  ngOnInit() {
    this.currentUser = localStorage.getItem('userId');
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      category: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      products: new FormArray([]),
      description: ['', [Validators.required]],
      creator: this.currentUser
    });
    console.log(this.currentUser)
  }

  onCheckChange(event) {
    const formArray: FormArray = this.form.get('products') as FormArray;
  
    /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;
  
      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onClick(category) {
    document.getElementById('chooseCategory').innerText = category.name;
    this.form.controls.category = category.name;
  }

  ngAfterContentInit() {
    this.listService.getAllCategories().subscribe(data => {
      this.categories = data["categories"];
    });

    this.listService.getAllProducts().subscribe(data => {
      this.allProducts = data['products'];
    })
  }

  createRecipe() {
    this.createService.createRecipe(this.form.value).subscribe((data) => {
      this.router.navigate(['/home']);
    })
  }
}
