import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseListComponent } from './book-browsing/browse-list/browse-list.component';
import { BrowseListItemComponent } from './book-browsing/browse-list-item/browse-list-item.component';

@NgModule({
    declarations: [
        AppComponent,
        BrowseListComponent,
        BrowseListItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot([
            { path: '', component: AppComponent },
            { path: 'browse', component: BrowseListComponent }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
