import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class BookDetailService {

    baseUrl: string = 'https://localhost:44323/api/';
    
    constructor(private http: HttpClient) { }

    book: Book[];

    getBooks(): Book[] {
        return [
            {
                "CoverUrl": '',
                "UserId": 1,
                "BookId": 1,
                "Name": "Harry Potter",
                "Author": "Gabriel",
                "RetailPrice": 29.5,
                "Quantity": 4,
                "IsSavedForLater": true

            },
            {
                "CoverUrl": '',
                "UserId": 2,
                "BookId": 2,
                "Name": "Pototo",
                "Author": "GG",
                "RetailPrice": 15,
                "Quantity": 3,
                "IsSavedForLater": true
            }]
    };

    getBookDetail(id: number)
    {
        return this.http.get(this.baseUrl + '/BookDetail/' + id);
    }

    getAuthorId(id: number){

        return this.http.get(this.baseUrl + '/BookDetail/AuthorID/' + id);
    }

    getAuthorList(id: number)
    {

        return this.http.get(this.baseUrl + '/BookDetail/AuthorList/' + id);
    }

    
    
}

