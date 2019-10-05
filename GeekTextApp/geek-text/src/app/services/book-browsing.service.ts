import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BookBrowsingService {

    constructor() { }

    getBooks() {
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
        ]
    }
}
