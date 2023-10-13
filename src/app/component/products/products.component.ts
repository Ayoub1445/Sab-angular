import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  table: {
    productName: string;
    productPrice: string;
    productQuantity: string;
  }[] = [];

  public qrCodeText: string;

  constructor(private productService: ProductService) {}
  // getProduct et ngOnInit sans neccaire pour recup Data depuis Service
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.table = this.productService.productTable;
    console.log('my product', this.table);
  }
}
