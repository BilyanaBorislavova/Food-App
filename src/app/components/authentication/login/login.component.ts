import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder, private service: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    this.service.login(this.form.value).subscribe((data) => {
      localStorage.setItem('isAdmin', data['isAdmin']);
      localStorage.setItem('token', data['token']);
      localStorage.setItem('userId', data['userId']);
      this.router.navigate(['/home'])
    })
  }

}
