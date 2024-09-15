import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route : Router) { }

  login(uname:any , pword:any){
    if(uname === 'Kartik' || uname === 'Shashaank' && pword === '1234'){
      return 200
    }
    else{
      return 404
    }
  }

  logout(){
    this.route.navigate(['login']);
  }
}
