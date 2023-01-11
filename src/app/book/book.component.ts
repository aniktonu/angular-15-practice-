import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../types/types';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {


  @Input() book: Book = {} as Book;
  @Input() index: number = 0;

  @Output() addTocardEvent = new EventEmitter();


  addTocard() {
    this.addTocardEvent.emit(this.book);
  }
}