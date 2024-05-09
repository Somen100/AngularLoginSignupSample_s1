import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';
import { UserLogin, UserRegister } from '../../inetrfaces/login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  userLogin: UserLogin = {
    email: '',
    password: ''
  };
  userRegister: UserRegister = {
    name:'',
    email: '',
    password: '',
    confirmPassword:''
  };
 formData:any;
 isLogin:boolean=true;
 isSignUp:boolean=false;

  constructor(private  route: Router, private _dataService: SharedService) { }

  ngOnInit(): void {
  }

  signup(){
  this.isLogin=false;
  this.isSignUp=true;
   this._dataService.setUserData(this.userRegister);
   console.log("data sent => ", this.userRegister);
  }
  login(){
    this.isLogin=true;
    this.isSignUp=false;

    console.log("this.userLogin ", this.userLogin);

    this.route.navigate(['home']);
  }
}
