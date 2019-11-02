import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-browse-list-item',
    templateUrl: './browse-list-item.component.html',
    styleUrls: ['./browse-list-item.component.scss']
})
export class BrowseListItemComponent implements OnInit {

    @Input() book;

    constructor( ) { }

    ngOnInit() {
    }

}
