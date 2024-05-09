import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { UserLogin, UserRegister } from '../../inetrfaces/login';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _dataService: SharedService) { }
  userRegister: UserRegister = {
    name:'',
    email: '',
    password: '',
    confirmPassword:''
  };
  ngOnInit(): void {
    debugger

    this.userRegister=this._dataService.getUserData();
    console.log("this.userRegister ==> ",this.userRegister);
   if (this.userRegister.password) {
    this.tableData.push({
        fullname: this.userRegister.name || '', // Use empty string as fallback if name is undefined
        password: this.userRegister.password,
        email: this.userRegister.email || '' // Use empty string as fallback if email is undefined
    });
}
  }
  tableData = [
    { fullname: 'John', password: 'Doe', email: 'john@example.com' },
    { fullname: 'Mary', password: 'Moe', email: 'mary@example.com' },
    { fullname: 'July', password: 'Dooley', email: 'july@example.com' }
  ]
}
