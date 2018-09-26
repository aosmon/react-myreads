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

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <ListBooks 
            books={this.state.books}/>
        )}/>

        <Route path="/search" render={({history})=>(
          <SearchBooks
            books={this.state.books}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
