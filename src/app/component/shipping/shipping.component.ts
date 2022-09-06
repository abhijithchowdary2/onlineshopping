import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts! :Observable<{ type:string,price :number}[]>;

  constructor(private cartService : CartServiceService) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
