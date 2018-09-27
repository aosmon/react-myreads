import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import {Route} from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
    })
  }

  updateShelf = (book, shelf) =>{
    book.shelf = shelf

    BooksAPI.update(book, shelf).then(books => {
        this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <ListBooks 
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
        )}/>

        <Route path="/search" render={({history})=>(
          <SearchBooks
            books={this.state.books}
            updateSearchBooks={this.updateSearchBooks}
            updateShelf={this.updateShelf}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
