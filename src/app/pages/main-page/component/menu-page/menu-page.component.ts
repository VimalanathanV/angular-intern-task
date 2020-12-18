import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }
  loginFunction() {
      this._Router.navigateByUrl('/signin');
  }

  product1:any=[{
    productName: 'CHICKEN',
    productDescription: 'https://online.kfc.co.in/Content/OnlineOrderingImages/Menu/Items/lg2x/CAT86-8287.jpg?v=14.41'
  },
  {
    productName: 'BURGER',
    productDescription: 'https://online.kfc.co.in/Content/OnlineOrderingImages/Menu/Items/lg2x/CAT99-8109.jpg?v=14.41'
  },
  {
    productName: 'SNACKS',
    productDescription: 'https://online.kfc.co.in/Content/OnlineOrderingImages/Menu/Items/lg2x/large-popcorn.jpg?v=14.41'
  }
];


product2:any=[{
  productName: 'BEVERAGES',
  productDescription: 'https://online.kfc.co.in/Content/OnlineOrderingImages/Menu/Items/lg2x/pepsi-pet.jpg?v=14.41'
},
{
  productName: 'RICE BOWLS',
  productDescription: 'https://online.kfc.co.in/Content/OnlineOrderingImages/Menu/Items/lg2x/smoky-red-rice-bowl.jpg?v=14.41'
},
{
  productName: 'EXCLUSIVES',
  productDescription: 'https://online.kfc.co.in/Content/OnlineOrderingImages/Menu/Items/lg2x/stay-home-bucket.jpg?v=14.41'
}
];




}
