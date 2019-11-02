import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartDataService {

  books = [];
  
  private REST_API_SERVER = "https://localhost:44323";

  addToCart(book) {
    this.books.push(book);
  }

  getBooks() {
    return this.books;
  }

  clearCart() {
    this.books = [];
    return this.books;
  }


  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
