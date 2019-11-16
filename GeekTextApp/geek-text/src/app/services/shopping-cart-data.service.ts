import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Book } from '../models/book.model';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartDataService {
  books;
  private url = "https://localhost:44323/api/";

  
  constructor(private httpClient: HttpClient) { }

  addToCart(book) {
    this.books.push(book);
  }

  
  addBookToCart(userId: number, bookId: number) {
    return this.httpClient.post(this.url + "cart?userId="+ userId, bookId);
  }

  getBooks(id: number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.url + "cart?id=" + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getSavedForLaterBooks(id: number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.url + "cart/booksSavedForLater?id=" + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  saveForLater(id: number, bookId: number, isSaved: boolean) {
    return this.httpClient.put(this.url + "cart/booksSavedForLater/" + bookId + "?userId=" + id, isSaved, httpOptions)

  }

  deleteBookFromCart(userId:number, bookId:number) {
    return this.httpClient.delete(this.url + "cart/" + bookId + "?userId=" + userId);
  }

  clearCart() {
    this.books = [];
    return this.books;
  }

  checkout(userId:number) {
    return this.httpClient.post(this.url + "cart/checkout?userId=" + userId, userId, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateBookQuantity(userId:number, bookId:number, quantity:number) {
    return this.httpClient.put(this.url + "cart/" + bookId + "?userId=" + userId, quantity, httpOptions)
  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An Error Occured: ', error.error.message);
    } else {
      console.error(
        'Backend returned an error code'
      )
    }
    return throwError(
      'Something bad happened: Please try again later.'
    )
  }
  
}
