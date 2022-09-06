import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productList :any =[]

  constructor(private cartServiceService:CartServiceService) { }

  ngOnInit(): void {
    this.productList = this.cartServiceService.getItems()

  }
  
  
  


   
}
