import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuPageComponent} from './component/menu-page/menu-page.component';


const routes: Routes = [
  {
    path: '',
    component: MenuPageComponent,
  },
  {
    path : 'burger',
    loadChildren: () =>
          import('../burger/burger.module').then((m) => m.BurgerModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
