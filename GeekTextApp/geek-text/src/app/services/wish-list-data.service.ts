import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Wishlist } from '../models/wishlist.model';
import { catchError } from 'rxjs/operators';
import { Book } from '../models/book.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};


@Injectable({
    providedIn: 'root'
})
export class WishListDataService {
    books;
    private url = "https://localhost:44323/api/";


    constructor(private httpClient: HttpClient) { }

    addToCart(book) {
        this.books.push(book);
    }

    //https:// localhost:44323/api/wishList/create?id=2&wishListName=Wish_List_Roey_1
    createWishList(userId: number, name: string) {
        return this.httpClient.post(this.url + "wishList/create?id=" + userId, name);
    }

    //https:// localhost:44323/api/wishList/addItem?id=2&bookId=3&wishListName=Wish_List_Roey_1
    addBookToWishlist(userId: number, bookId: number, wishlistName) {
        return this.httpClient.post(this.url + "wishList/addItem?id=" + userId, bookId, wishlistName);
    }
    
    //https:// localhost:44323/api/wishList/removeItem?id=2&bookId=3&wishListName=Wish_List_Roey_1
    removeBookFromWishlist(userId: number, bookId: number, wishlistName) {
        return this.httpClient.delete(this.url + "wishList/removeItem?id=" + userId
            + "&bookId=" + bookId + "&wishListName=" + wishlistName);
    }

    //https:// localhost:44323/api/wishList?UserId=2
    getWishlists(userId: number): Observable<Wishlist[]> {
        return this.httpClient.get<Wishlist[]>(this.url + "wishList?UserId=" + userId)
            .pipe(
                catchError(this.handleError)
            );
    }

    //https:// localhost:44323/api/wishList/getBooks?UserId=2&wishListName=Wish_List_Roey_1
    getBooks(userId: number, name: string): Observable<Book> {
        console.log('Inside Service: ' + name);
        return this.httpClient.get<Book >(this.url + "wishList/getBooks?UserId=" + userId + "&wishListName=" + name)
            .pipe(
                catchError(this.handleError)
            );
    }

    /**https:// localhost:44323/api/wishList/transferItem?id=2&bookId=4&wishListNameOrigin=Wish_List_Roey_1
    & wishListNameDestination=Wish_List_Edward_1**/
    transferBook(userId: number, bookId: number, wishlistNameOrigin: string, wishlistNameDestination: string)
    {
        return this.httpClient.post(this.url + "wishList/addItem?id=" + userId, bookId);
    }

    clearCart() {
        this.books = [];
        return this.books;
    }

    updateBookQuantity(userId: number, bookId: number, quantity: number) {
        return this.httpClient.put(this.url + "cart/" + bookId + "?userId=" + userId, quantity, httpOptions)
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
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

