import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBooks extends React.Component{

  static propTypes = {
    books: PropTypes.array.isRequired
  }	

  render() {

  	let {books} = this.props

    return (
	/*
	  NOTES: The search from BooksAPI is limited to a particular set of search terms.
	  You can find these search terms here:
	  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
   	*/
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {}
            <input type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>



    )
  }
}
export default SearchBooks;