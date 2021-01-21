import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartSizeSubject = new Subject();

  constructor() { }

  public all(): any[] {
    return <[]> JSON.parse(localStorage.getItem('cart') ?? '[]');
  }

  public add(book: any) {
    let cart: any[] = <[]> JSON.parse(localStorage.getItem('cart') ?? '[]');
    
    let index = cart.findIndex(item => item._id == book._id);
    if (index == -1) {
      book['quantity'] = 1;
      cart.push(book);
    } else {
      let item = cart[index];
      item['quantity']++;
      cart[index] = item;
    }

    this.cartSizeSubject.next(this.totalQuantity());
    
    let cartJson = JSON.stringify(cart);
    localStorage.setItem('cart', cartJson);
  }

  public decreaseQuantity(book: any) {
    if (book['quantity'] > 1) {
      book['quantity']--;

      this.update(book);

      this.cartSizeSubject.next(this.totalQuantity());
    }
  }

  public increaseQuantity(book: any) {
    book['quantity']++;
    this.update(book);

    this.cartSizeSubject.next(this.totalQuantity());
  }

  public update(book: any) {
    let cart: any[] = <[]> JSON.parse(localStorage.getItem('cart') ?? '[]');
    let index = cart.findIndex(item => item._id == book._id);

    cart[index] = book;
    
    let cartJson = JSON.stringify(cart);
    localStorage.setItem('cart', cartJson);
  }

  public remove(book: any) {
    let cart: any[] = <[]> JSON.parse(localStorage.getItem('cart') ?? '[]');
    let index = cart.findIndex(item => item._id == book._id);

    cart.splice(index, 1);

    let cartJson = JSON.stringify(cart);
    localStorage.setItem('cart', cartJson);

    this.cartSizeSubject.next(this.totalQuantity());

    return index;
  }

  public totalQuantity() {
    let cart: any[] = <[]> JSON.parse(localStorage.getItem('cart') ?? '[]');
    if (cart.length > 0) {
      return cart.reduce((overall:any, current: any) => {
        return { quantity: overall.quantity + current.quantity };
      }).quantity;
    }
    return 0;
  }

  public clear() {
    localStorage.removeItem('cart');
    
    this.cartSizeSubject.next(0);
  }
}
