import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import sortBy from 'sort-by';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends React.Component{

  state={
    query: '',
    searchResults: [],
    searchError: false,
  };

  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  updateQuery = (query)=>{
    this.setState({query: query});
  }

  render() {

    const {books, updateShelf} = this.props;
    const {query, searchResults, searchError} = this.state;

    if(query){
      BooksAPI.search(query, 20).then((foundBooks)=>{
        //match found books with existing books' shelves
        if(foundBooks.length){
            let matchedBooks = foundBooks.map((book) => {
              const userBook = books.find((userBook)=>(userBook.id===book.id));
              book.shelf = userBook ? userBook.shelf : 'none';
              return book;
            });
          this.setState({searchResults: matchedBooks, searchError: false});
        }else {
          this.setState({searchResults: [], searchError: true});
        }
    });
      searchResults.sort(sortBy('title'));
    }

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
            {
              <input type="text" 
                placeholder="Search by title or author"
                value={query}
                onChange={(event)=>this.updateQuery(event.target.value)}
              />                
            }
          </div>
        </div>

        {query && searchResults.length>0 && (            
          <div className="search-books-results">
              <div className='showing-books'>
                  <h3>{searchResults.length} items found</h3>
              </div>            
                    
              <ol className="books-grid">
               {searchResults.map((book) => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      updateShelf={updateShelf}
                    />
                  </li>
                ))}
              </ol>
            </div>
          )}
        {searchError && (            
          <div className="search-books-results">
            <div className='showing-books'>
              <h3>No results match '{query}': 0 items found</h3>
            </div>                                 
          </div>
        )}
      </div>
    )
  }
}
export default SearchBooks;