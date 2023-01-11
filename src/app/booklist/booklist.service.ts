import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  constructor() { }


  getBooklist() {
    return [
      {
        b_title: 'বেলা ফুরাবার আগে',
        b_author: 'আরিফ আজাদ',
        b_price: 200,
        b_isAvailable: true,
        b_image: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Bela_Furabar_Age-Arif_Azad-e517b-195175.png',
      },
      {

        b_title: 'প্যারাডক্সিক্যাল সাজিদ ২',
        b_author: 'আরিফ আজাদ',
        b_price: 250,
        b_isAvailable: false,
        b_image: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/1ef97cc21_178414.jpg',
      },
      {

        b_title: 'এবার ভিন্ন কিছু হোক',
        b_author: 'আরিফ আজাদ',
        b_price: 300,
        b_isAvailable: true,
        b_image: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Ebar_Bhinno_Kichu_Hok_-Arif_Azad-64903-226821.jpg',
      },
      {

        b_title: 'যে জীবন ফড়িঙের যে জীবন জোনাকির',
        b_author: 'সাজিদ ইসলাম',
        b_price: 250,
        b_isAvailable: false,
        b_image: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/390033084_210869.jpg',
      }
    ];
  }



}
