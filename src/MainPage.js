import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BookShelves from './BookShelves'
import './App.css';


class MainPage extends Component {
 render() {
         return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            {< BookShelves books = {
              this.props.books
            }
            moveShelf = {
              this.props.moveShelf
            }
            />}

            <div className="open-search">
            <Link
            to="/search"
            >Add a book</Link>
            </div>
          </div>
  
    );
 }
}

export default MainPage;