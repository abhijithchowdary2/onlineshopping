import { Component, OnInit } from '@angular/core';
import { PRODUCT } from 'src/app/product';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   productList = PRODUCT;
   
  
  constructor(private route:ActivatedRoute  ,private cartService:CartServiceService) { }

  ngOnInit(): void {
    console.log(this.productList);

  }
  addToCart(item:any){
    this.cartService.addToCart(item)

  }

}
