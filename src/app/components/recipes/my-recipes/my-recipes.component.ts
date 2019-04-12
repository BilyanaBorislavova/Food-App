import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/core/services/list.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CreateService } from 'src/app/core/services/create.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {
  myRecipes;
  currentUser;
  constructor(private listService: ListService,
     private authService: AuthenticationService, 
     private crudService: CreateService,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('userId');
    this.listService.getMyRecipes(this.authService.isAuth()).subscribe((data) => {
      this.myRecipes = data['recipes']
      this.myRecipes = this.myRecipes.filter(a => a !== null);
    })
  }

  deleteRecipe(id) {
    console.log(id)
    this.crudService.deleteRecipe(id).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/home']);
    })
  }

}
