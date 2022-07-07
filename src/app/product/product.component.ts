import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2.5
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3.5
      }
    },
    nav: true
  }
  

  constructor() { }

  ngOnInit(): void {

  }
  
}
