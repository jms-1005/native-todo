import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-layout',
  templateUrl: `./layout.component.html`,
  styleUrls: [ 'layout.component.css']

})
export class LayoutComponent implements OnInit{

  productList = [
    {
      productname: "asfd",
      productPrice: 399.99,
      productImage: 'p1.jpg',
      productRating: 4.5
    },
    {
      productname: "asdf"
    }
  ]

  ngOnInit(){

  }

}
