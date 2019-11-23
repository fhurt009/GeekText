import { Component, OnInit, Input } from '@angular/core';
import { BookDetailService } from '/Users/user/Documents/GitHub/GeekText/GeekTextApp/geek-text/src/app/services/book-detail.service';
import { Book } from '../models/book.model';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string;
    
    book: any;

    //@Input() bookId: number;
    

    checkId: number;

    Author: string;
    bookId: number;

    AuthorId: number;
    
    bookName: string = "Harry Potter";
    bookGender: string = "fantasy";
    bookCode: string = "GFN-0023";
    releaseDate: string = "March 18, 2019";

    description: string = "fantasy - f";
    starRating: number = 4.3;

    constructor(private route: ActivatedRoute,private BookDetailService: BookDetailService) { }

    ngOnInit() {

            const param = this.route.snapshot.paramMap.get('id');
            const id = + param;
            this.bookId = id;


       
        this.BookDetailService.getAuthorId(this.bookId).subscribe(book => this.book = book);

        this.BookDetailService.getAuthorId(this.bookId).subscribe(book => this.AuthorId = this.book.AuthorId);
        this.BookDetailService.getAuthorId(this.bookId).subscribe(book => this.Author = this.book.Author);
        
        

       console.log('In OnInit');


  }

}
