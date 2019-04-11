import { Component, OnInit } from '@angular/core';
import { CreateService } from 'src/app/core/services/create.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  form;
  constructor(private service: CreateService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      photo: ['', [Validators.required]]
    })
  }

  createCategory() {
    this.service.createCategory(this.form.value).subscribe((data) => {
      this.router.navigate(['/home'])
    })
  }
}
