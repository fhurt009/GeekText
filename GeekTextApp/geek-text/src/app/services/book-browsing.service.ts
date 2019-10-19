import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookBrowsingService {

    baseUrl: string = 'https://localhost:44323/api/BookBrowse';

    constructor(private http: HttpClient) { }

    getAllGenres() {
        return this.http.get(this.baseUrl + '/AllGenres');
    }

    getBooksByTopSellers(sortBy: string) {
        return this.http.get(this.baseUrl + '/TopSellers' + '?SortBy=' + sortBy);
    }

    getBooksByGenre(genre: string, sortBy: string) {
        return this.http.get(this.baseUrl + '/Genre/' + genre + '?SortBy=' + sortBy);
    }

    getBooksByRating(rating: number, sortBy: string) {
        return this.http.get(this.baseUrl + '/Rating/' + rating + '?SortBy=' + sortBy);
    }
}
