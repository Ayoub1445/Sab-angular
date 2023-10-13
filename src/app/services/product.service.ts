import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productTable = [
    { productName: "'apple", productPrice: '20', productQuantity: '5' },
    { productName: "'orange", productPrice: '20', productQuantity: '5' },
    { productName: "'banana", productPrice: '20', productQuantity: '5' },
  ];

  constructor() {}
}
