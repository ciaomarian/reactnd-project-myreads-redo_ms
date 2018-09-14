import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import './App.css';

//import Book from './Book';


class Book extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
// get books on load
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

moveShelf = (book, shelf) => {
 const bookIndex = this.state.books.findIndex(
      oldBook => oldBook.id === book.id
    );
    let newState;
    if (bookIndex !== -1) {
      newState = Object.assign({}, this.state.books);
      newState[bookIndex].shelf = shelf;
    }
    BooksAPI.update(book, shelf);
    this.setState({ newState });
  };

  render() {

    return (
      <div className = "app">
      <Route exact path ="/" render={() => (
      <MainPage
      books = {this.state.books}
      moveShelf = {this.moveShelf}
      /> 
      )} />    

      <Route path ="/search" render={() => (
      <SearchPage 
      moveShelf = {this.moveShelf}
      books = {this.state.books}
      />
    )} />
    </div>
    )
  }
  }
  export default Book;
