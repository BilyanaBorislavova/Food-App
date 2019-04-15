import { Component, OnInit } from "@angular/core";
import { ListService } from "src/app/core/services/list.service";
import { Observable } from "rxjs";
import { Category } from "src/app/core/models/category";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  categories$: Observable<Array<Category>>;
  constructor(private service: ListService) {}

  ngOnInit() {
   this.categories$ = this.service.getAllCategories();
  }
}
