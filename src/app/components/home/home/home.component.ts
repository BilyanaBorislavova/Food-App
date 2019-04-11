import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/core/services/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories;
  constructor(private service: ListService) { }

  ngOnInit() {
    this.service.getAllCategories().subscribe((data) => {
      this.categories = data['categories'];
    })
  }


}
