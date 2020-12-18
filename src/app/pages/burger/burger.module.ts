import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BurgerRoutingModule } from './burger-routing.module';
import { BurgerComponent } from './component/burger/burger.component';


@NgModule({
  declarations: [BurgerComponent],
  imports: [
    CommonModule,
    BurgerRoutingModule
  ]
})
export class BurgerModule { }
