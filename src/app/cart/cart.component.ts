import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:any[] = [];
  
  displayedColumns = [ 'item', 'quantity', 'price', 'action' ];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.all();
  }

  increaseQuantity(book: any) {
    this.cartService.increaseQuantity(book);
  }

  decreaseQuantity(book: any) {
    this.cartService.decreaseQuantity(book);
  }

  removeItem(book: any) {
    let index = this.cartService.remove(book);
    this.cart = 
    this.cart = this.cartService.all();
  }

}
