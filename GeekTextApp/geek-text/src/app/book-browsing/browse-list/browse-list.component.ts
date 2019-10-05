import { Component, OnInit } from '@angular/core';

import { BookBrowsingService } from '../../services/book-browsing.service';

@Component({
    selector: 'app-browse-list',
    templateUrl: './browse-list.component.html',
    styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit {

    books;

    constructor(private bookBrowsingService: BookBrowsingService) { }

    ngOnInit() {
        this.books = this.bookBrowsingService.getBooks();
    }

}
