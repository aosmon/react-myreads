# MyReads Project

A bookshelf app that allows to select and categorize books into read, currently reading, and want to read. The project emphasizes using React to build the application and provides an API server and client library utilized to interact with the application.

<img width="1280" alt="myreads1" src="https://user-images.githubusercontent.com/26148396/50356858-c04f6880-0521-11e9-9158-657bda6c4d99.png">
	<img width="1280" alt="myreads2" src="https://user-images.githubusercontent.com/26148396/50356862-c5141c80-0521-11e9-92ef-53f181249727.png">

## Installation and Launch Instructions

- Clone or download the repo.
- Open a terminal in project directory.
- Install Node.js. You can download it here: https://www.npmjs.com/get-npm
- Install npm
  - `npm install`
- Install all project dependencies with npm install
  - `npm install --save react-router-dom`
  - `npm install --save escape-string-regexp sort-by`
  - `npm install --save prop-types`
- Start the development server with `npm start`

## Backend Server

To simplify development process, a backend server was provided by Udacity. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods required to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`
Method Signature:
```js
getAll()
```
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`
Method Signature:
```js
update(book, shelf)
```
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`
Method Signature:
```js
search(query, maxResults)
```
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
