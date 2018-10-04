import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const Shelf = ({ shelfTitle, books, updateShelf }) => {

  return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  updateShelf={updateShelf}
                />
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
    updateShelf: PropTypes.func.isRequired
};  

export default Shelf;