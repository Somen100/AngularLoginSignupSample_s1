import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './sharedComponents/nav/nav.component';



@NgModule({
  declarations: [
NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent
  ]
})
export class SharedModule { }
