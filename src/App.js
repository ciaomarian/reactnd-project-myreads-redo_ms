import React from 'react';
import { Link, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import * as BooksAPI from './BooksAPI';
import './App.css';

//import Book from './Book';



class Book extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })
    })
  }
  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  render() {
    return (
      <div className = "app">
      <Route exact path ="/" render={() => (
      <MainPage
      books = {this.state.books}
      moveShelf = {this.moveShelf}
      /> 
      )} />    

      <Route exact path ="/search" render={() => (
      <SearchPage 
      moveShelf = {this.moveShelf}
      />
    )} />
    </div>
    )
  }
  }
  export default Book;
