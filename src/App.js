import React, { Component } from 'react';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import './App.css';
import { Link, Route } from 'react-router-dom'


import Book from './Book'

// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {

    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
      <MainPage/>
      </div>
    )
  }
}

export default BooksApp;