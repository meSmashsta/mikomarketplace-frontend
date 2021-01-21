import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  cartItems: any;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.totalQuantity();
    
    this.cartService.cartSizeSubject.subscribe(count => this.cartItems = count);
  }

}
