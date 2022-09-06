import { Injectable } from '@angular/core';
import { Product } from '../productType';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  public search = new BehaviorSubject<any>([])

  product : Product[] =[];

  constructor(private http:HttpClient) { }
  
  addToCart(item : Product){
    this.product.push(item);
  }

  removeProduct(){

  }

  getItems(){
    return this.product;
  }

  getShippingPrices(){
    return this.http.get<{type:string,price:number}[]>('/assets/shipping.json');
  }
   
}
