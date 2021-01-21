import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

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
    
    let cartJson = JSON.stringify(cart);
    localStorage.setItem('cart', cartJson);
  }

  public decreaseQuantity(book: any) {
    if (book['quantity'] > 1) {
      book['quantity']--;

      this.update(book);
    }
  }

  public increaseQuantity(book: any) {
      book['quantity']++;
      this.update(book);
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

    return index;
  }

  public clear() {
    localStorage.removeItem('cart');
  }
}
