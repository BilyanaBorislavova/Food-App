import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['home']);
  }
}
