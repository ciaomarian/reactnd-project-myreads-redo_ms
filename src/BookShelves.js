import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import Book from './Book';



class BookShelves extends Component {
    render() {
            return (
            
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {
                      this.props.books
                      .filter(book => book.shelf === 'currentlyReading')
                      .map(book =>
                        <li key = {book.id}>< Book book = {book} 
                          moveShelf = {this.props.moveShelf}
                        currentShelf = 'currentlyReading'
                        />
                      </li>)
                      }
                    </ol>
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      this.props.books
                      .filter(book => book.shelf === 'wantToRead')
                      .map(book =>
                        <li key = {book.id}>
                        < Book book={book}
                        moveShelf = {
                          this.props.moveShelf
                        }
                        currentShelf = 'wantToRead'
                        />
                      </li>)
                    }                     
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                      this.props.books
                      .filter(book => book.shelf === 'read')
                      .map(book =>
                        <li key = {book.id}>
                        <Book book={book}
                        moveShelf = {
                          this.props.moveShelf}
                        currentShelf = 'read'
                        />
                      </li>)
                      }
                    </ol>
                  </div>
                </div>
              </div> 
        );
    }
}
export default BookShelves;
