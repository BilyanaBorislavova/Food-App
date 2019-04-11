import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateService } from 'src/app/core/services/create.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder, private service: CreateService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    })
  }

  createProduct() {
    this.service.createProduct(this.form.value).subscribe((data) => {
      this.router.navigate(['/home']);
    })
  }
}
