import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
userData:any;
  constructor() { }

  setUserData(data:any) {
    debugger
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }
}
