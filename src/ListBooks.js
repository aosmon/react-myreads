import React from 'react';
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf';
import PropTypes from 'prop-types'

class ListBooks extends React.Component{

  static propTypes = {
    books: PropTypes.array.isRequired
  }

    state={
      shelves: [
        {shelfTitle: 'Currently Reading', name: 'currentlyReading'},
        {shelfTitle: 'Want to Read', name: 'wantToRead'},
        {shelfTitle: 'Read', name: 'read'},
      ]
    }

  render() {

  	let {books} = this.props
  	      
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.shelves.map((shelf) => (                       
              <BookShelf key={shelf.shelfTitle}
                shelfTitle={shelf.shelfTitle} 
                books={books.filter( book=> shelf.name===book.shelf)}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>


    )
  }
}
export default ListBooks;