import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookBrowsingService {

    constructor(private http: HttpClient) { }

    getBooks(rating: number, sortBy: string) {
        /*
        return [
            {
                id: 1,
                name: 'Where the wild things go',
                cover: 'https://images-na.ssl-images-amazon.com/images/I/51fNhv2wHoL._SX322_BO1,204,203,200_.jpg',
                authors: 'james cordon'
            },
            {
                id: 2,
                name: 'The girl with the dragon tattoo',
                cover: 'https://images-na.ssl-images-amazon.com/images/I/51fNhv2wHoL._SX322_BO1,204,203,200_.jpg',
                authors: 'roey'
            }
        ]*/

        return this.http.get('https://localhost:44323/api/BookBrowse?Rating=' + rating + '&Sort=' + sortBy);
    }
}
