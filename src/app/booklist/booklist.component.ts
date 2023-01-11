import { Component } from '@angular/core';
import { Book } from '../types/types';
import { BooklistService } from '../booklist/booklist.service';





@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})


export class BooklistComponent {


  constructor(private booklistService: BooklistService) {

  }


  ngOnInit(): void {
    this.booklist = this.booklistService.getBooklist();
  }


  title = 'This interpulation come from ts file with {{title}}';

  isdisbled = true;

  onClick() {
    console.log('button clicked and event is working');
  }

  input: string = '';

  show = true;


  a: number = 100;


  booklist: Book[] = [];
  card: Book[] = [];

  addToCard(book: Book) {
    this.card.push(book);
    console.log(this.card);
  }
}
