import { Component , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoginview : boolean = true;
  // username=""
  // password=""
  // errMsg=""
  signupObj : any = {
    Username : "",
      Email : "",
      Password : ""
    }
  
  loginObj = {
    Username : "",
    Password : ""
  }

  constructor(private auth :AuthService , private route : Router){}
  ngOnInit(): void{
  }
  // login(){
  //   if(this.username.length === 0){
  //     this.errMsg="Username is Required"
  //   }
  //   else if(this.password.length === 0){
  //     this.errMsg = "Password is Required"
  //   }
  //   else{
  //     this.errMsg = ""
  //     let res = this.auth.login(this.username , this.password);
  //     if(res === 200){
  //       this.route.navigate(['home'])
  //     }
  //     else{
  //       this.errMsg="Invalid Credentials"
  //     }
  //   }

  // }
  // Signup(){
  //   this.signupUser.push(this.signupObj);
  //   localStorage.setItem('signupUsers' ,  JSON.stringify(this.signupUser))
  // }
  Signup(){
    const islocaldata = localStorage.getItem("local");
    if(islocaldata != null){
      const localArray = JSON.parse(islocaldata)
      localArray.push(this.signupObj);
      localStorage.setItem('local' , JSON.stringify(localArray))
    }
    else{
      const localArray = [];
      localArray.push(this.signupObj);
      localStorage.setItem('local' , JSON.stringify(localArray))
    }
    alert("Registered Successfully");
    
}
  
  loginUser(){
    const islocaldata = localStorage.getItem('local')
    if(islocaldata != null){
      const users = JSON.parse(islocaldata)
      const isUserExist = users.find((m:any) => m.Username === this.loginObj.Username && m.Password ===  this.loginObj.Password)
      if(isUserExist != undefined){
        this.route.navigate(['home']);
      }
      else{
        alert("Incorrect credentials")
      }

    }
    else{
      alert("No User Found")
    }
      
     
  //     if(isUserExist != undefined){
  //       alert("User Logged in");
  //       this.route.navigate(['home']);
  //     }
  //     else{
  //       alert("Invalid Credentials")
  //     }
    
   
   }

}
