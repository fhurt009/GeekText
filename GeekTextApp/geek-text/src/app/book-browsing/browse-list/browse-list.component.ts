import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookBrowsingService } from '../../services/book-browsing.service';

@Component({
    selector: 'app-browse-list',
    templateUrl: './browse-list.component.html',
    styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit {

    books;

    constructor(private route: ActivatedRoute, private bookBrowsingService: BookBrowsingService) { }

    ngOnInit() {
        this.sortBooks('name');


        //setTimeout(() => this.sortBooks('author'), 5000);
        
    }
















    sortBooks(sortBy: string) {
        this.route.paramMap.subscribe(params => {
            this.bookBrowsingService.getBooks(parseInt(params.get('rating')), sortBy).subscribe(books => this.books = books);
        });
    }

}
