import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private route : Router , private auth : AuthService){}
  goHome(){
    this.route.navigate(['home']);
  }
  logout()
  {
    this.auth.logout();
  }

}
