import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
import { interfaceUser } from '../interface/user.interface';

@Component({
  selector: 'app-first-compo',
  templateUrl: './first-compo.component.html',
  styleUrls: ['./first-compo.component.css'],
})
export class FirstCompoComponent implements OnInit {
  name = 'ayoub';
  status = 'active';
  Message: any;
  table: {
    productName: string;
    productPrice: string;
    productQuantity: string;
  }[] = [];
  // voila le var qui receptionnera les infos arriver, elle est relié au dossier interface.
  public userList: interfaceUser[] = [];

  // on a fait cette modification sur le constru pour faire fonctionner le deplacement entre les compo , faire aussi la creation de la fonctionn GoToSecondeCompo ainsi de faire l'appelation de la fonction dans le HTML
  constructor(
    private route: Router,
    private productService: ProductService,
    private userService: UserService
  ) {}

  getStatus() {
    return this.status;
  }

  getMessage() {
    console.log('My new message');
  }

  goToSecondCompo() {
    this.route.navigate(['/Second']);
  }
  // getProduct et ngOnInit sans neccaire pour recup Data depuis Service
  getProduct() {
    this.table = this.productService.productTable;
    console.log('my product', this.table);
  }
  ngOnInit(): void {
    this.getProduct();
    this.getUser();
  }
  // fonction pour recup DataJson depuis le link mentionner sur /services/user.services.
  getUser() {
    this.userService
      .getUserFromPlaceholder()
      .subscribe((result: interfaceUser[]) => {
        this.userList = result;
        console.log('Données JSON Placeholder', result);
      });
  }
}
