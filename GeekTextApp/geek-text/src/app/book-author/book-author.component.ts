import { Component, OnInit ,Input} from '@angular/core';
import { Book } from '../models/book.model';
import { BookDetailService } from '/Users/user/Documents/GitHub/GeekText/GeekTextApp/geek-text/src/app/services/book-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-book-author',
  templateUrl: './book-author.component.html',
  styleUrls: ['./book-author.component.scss']
})
export class BookAuthorComponent implements OnInit {

    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string;
    books: Book[];

    pageTitle: string = "Books By ";
   
    @Input() Author: string;

    AuthorId: number;
    bookId: number;
    authorName: string;

    book: any ;
    

    constructor(private route: ActivatedRoute, private _location: Location, private BookDetailService: BookDetailService) { }

    ngOnInit() {

        
        const param = this.route.snapshot.paramMap.get('id');
        const id = + param;
        this.AuthorId = id;
        

        this.BookDetailService.getAuthorList(this.AuthorId).subscribe(book => this.book = book);
        //this.BookDetailService.getAuthorList(this.AuthorId).subscribe(book => this.authorName = this.book.Author);
    }

    onBack(): void {
        this._location.back();
    }

}
