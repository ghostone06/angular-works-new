import { Injectable } from '@angular/core';
import { Product } from '../Dtos/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    return [
       {id: 1, name: "Kalem",quantity: 1000},
       {id:2,name: "Slgi",quantity: 500},
       {id:3, name:"Defter", quantity:1500}
    ];
  }
}


