import React from 'react';
import PropTypes from 'prop-types'

class Book extends React.Component{

  static propTypes = {
      book: PropTypes.object.isRequired,
  }

  updateShelf = (e) =>{
    e.preventDefault();
    const shelf = e.target.value;
  	this.props.updateShelf(this.props.book, shelf);
  }

  render() {

  	let {book} = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={this.updateShelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', ') : 'Unknown'}</div>
      </div>
    )
  }
}
export default Book;