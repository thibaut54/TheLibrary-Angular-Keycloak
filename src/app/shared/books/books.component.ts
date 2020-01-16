import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from './book.service';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookList: Book[];

  constructor(public bookService: BookService) { }

  ngOnInit() {

    this.bookService.getBooks().subscribe(httpResponse => {
      this.bookList = httpResponse;
    }, error => {
      console.log('Class: BooksComponent, Function: bookService.getBooks(), Line 20 error(): '
      , error);
    });
  }

}
