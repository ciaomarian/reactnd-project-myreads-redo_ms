import React from 'react';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage';
import './App.css';

//import { Link, Route } from 'react-router-dom'
//import Book from './Book'



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
      this.setState({
        books: books
      })
    })
  }

  render() {
    return (
      <div className = "app">
      <MainPage books = {this.state.books}
      moveShelf = {this.moveShelf}
      /> 

      </div>
      )
    }
  }
  export default Book;
