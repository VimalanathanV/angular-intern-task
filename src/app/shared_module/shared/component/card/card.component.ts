import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  productName = '';

  @Input()
  productDescription='';

  constructor() { }

  ngOnInit(): void {
  }

}