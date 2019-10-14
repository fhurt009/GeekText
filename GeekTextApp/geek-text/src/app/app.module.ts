import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseListComponent } from './book-browsing/browse-list/browse-list.component';
import { BrowseListItemComponent } from './book-browsing/browse-list-item/browse-list-item.component';
import { CategoriesComponent } from './book-browsing/categories/categories.component';

@NgModule({
    declarations: [
        AppComponent,
        BrowseListComponent,
        BrowseListItemComponent,
        CategoriesComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot([
            { path: '', component: AppComponent },
            { path: 'categories', component: CategoriesComponent },
            { path: 'browse/genre/:genre', component: BrowseListComponent },
            { path: 'browse/rating/:rating', component: BrowseListComponent }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
