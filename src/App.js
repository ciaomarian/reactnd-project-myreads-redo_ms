import React from 'react';
import MainPage from './MainPage';
import './App.css';
import SearchPage from './SearchPage';
//import { Link, Route } from 'react-router-dom'
//import Book from './Book'
import * as BooksAPI from './BooksAPI'



class BooksApp extends React.Component {
    state = {
      books: []
    }
    componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState ({ books: books })
      })
    }

  render() {
    return (
      <div className="app">
      <MainPage
      books = {this.state.books}
      />
      </div>
    )
  }
}

export default BooksApp;
