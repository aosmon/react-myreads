import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const Shelf = (props) => {
  
  return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.map((book) => (
              <li key={book.id}>
                <Book book={book}/>
              </li>

            ))}
          </ol>

        </div>
      </div>
  )
}

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired,
};  

export default Shelf;