import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import sortBy from 'sort-by';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends React.Component{

  state={
    query: '',
    updatedBooks: [],
    searchResults: [],
    searchError: false
  };

  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  updateQuery = (query)=>{
    this.setState({query: query.trim()});
  }

  render() {

    const {books} = this.props;
    const {query, searchResults, searchError} = this.state;

    if(this.state.query){
      BooksAPI.search(query, 20).then((foundBooks)=>{
          if(foundBooks.length){
              foundBooks.map((book) => {
                const userBook = books.find((userBook)=>(userBook.id===book.id));
                if(userBook){
                  book.shelf = userBook.shelf;
                }
                return book;
              });
            this.setState({searchResults: foundBooks, searchError: false});
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

        {searchResults.length>0 && (            
          <div className="search-books-results">
              <div className='showing-books'>
                  <h3>{searchResults.length} items found</h3>
              </div>            
                    
              <ol className="books-grid">
               {searchResults.map((book) => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      updateShelf={this.props.updateShelf}
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