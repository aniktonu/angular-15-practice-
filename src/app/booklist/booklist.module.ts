import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './booklist.component';
import { BookComponent } from '../book/book.component';



@NgModule({
  declarations: [BooklistComponent, BookComponent],
  imports: [
    CommonModule
  ],
  exports: [BooklistComponent],

  providers: [BooklistComponent],
})
export class BooklistModule { }
