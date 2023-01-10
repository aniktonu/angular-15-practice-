import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'interpulation example in angular';

  isdisbled = true;

  onClick() {
    console.log('button clicked and event is working');
  }


  books = [
    {
      b_title: 'বেলা ফুরাবার আগে',
      b_author: 'আরিফ আজাদ',
      b_price: 200,
      b_isAvailable: true,
      b_image: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/1ef97cc21_178414.jpg',
    },
    {
      b_title2: 'বেলা ফুরাবার আগে',
      b_author2: 'আরিফ আজাদ',
      b_price2: 200,
      b_isAvailable2: true,
      b_image2: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/1ef97cc21_178414.jpg'
    }
  ]









}
