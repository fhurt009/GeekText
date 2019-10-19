import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './book-browsing/categories/categories.component';
import { BrowseListComponent } from './book-browsing/browse-list/browse-list.component';


const routes: Routes = [
    { path: '', component: CategoriesComponent },
    { path: 'browse/genre/:genre', component: BrowseListComponent },
    { path: 'browse/rating/:rating', component: BrowseListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
