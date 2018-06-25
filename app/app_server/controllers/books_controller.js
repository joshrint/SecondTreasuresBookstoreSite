/*
Author: Josh Rintoul
Email: josh.rint@gmail.com
GitHub: https://github.com/joshrint
book_contoller.js renders the expanded book page after the user selects the magnifier icon on the main page
*/
//Gets the booklist from the book model
const bookList = require('../models/books')
//renders the details for the single page
const getSingleBook = function(req, res){
  //If there is an error it will be displayed
  let errorMsg = null;
  //If there is no book selected it will display that no book was selected
  if (!(bookList instanceof Array)) {
    errorMsg = 'No Book Selected';
    bookList = [];
  }
  var book;
  //Search for the book in the json list. When database is implemented it will be faster using a select statement
  for(var key in bookList) {
    if (parseInt(bookList[key].isbn) == parseInt(req.params.isbn)){
      book = bookList[key];
      console.log(bookList[key].isbn);
      break;
    }
  }
  //Display the singleBook page
  res.render('singleBook', {
    title: book.title,
    errorMsg : errorMsg,
    book: book
  })
}

//Export the getSingleBook to be accessed by the router
module.exports = {
  getSingleBook
}
