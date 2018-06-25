/*
Author: Josh Rintoul
Email: josh.rint@gmail.com
GitHub: https://github.com/joshrint
Main Controller that handles the mainpage and the reading/review List
- Add to list
-Delete from list
*/
var bookList = require('../models/books')
//Render the main page
var readingList = [ ]
let errorMsg = null;
const index = function(req, res){
  //Render the page including the list of books, the reading/review list, and any error messages that were generated
  res.render('index', {
    title: 'Second Treasures Bookstore',
    errorMsg : errorMsg,
    readingList : readingList,
    books : bookList
  });
};

//Clears any alerts that have been generated
const removeAlert = function(req, res){
  errorMsg = null;
  res.redirect('/');
}

//Adds items to the reading/review list
const addToReadList = function(req, res) {
  errorMsg = null;
  var book;
  //Iterate over the booklist json object. If using a database a select statement would make it much faster
  for(var key in bookList){
    //If the isbn of the selected book is found push the book item to the end of the array and break out of the loop
    if (parseInt(bookList[key].isbn) == parseInt(req.body.isbn)){
      for(i in readingList){
        if(parseInt(bookList[key].isbn) == parseInt(readingList[i].isbn)){
          errorMsg = readingList[i].title + ' is already on the list';
          break
        }
      }
      //Check if the errorMsg wasn't generated and if not push the book onto the list
      if (errorMsg == null){
        readingList.push(bookList[key]);
      }
      break;
    }
  }
  //Once found reload the homepage
  res.redirect('/');
};

//Removes items from the reading/review list
const removeFromToReadList = function(req, res){
  errorMsg = null;
  var book;
  //Iterate over the list to remove the item.
  for (var key in readingList){
    //If found remove from the array
    if(parseInt(req.params.isbn) == parseInt(readingList[key].isbn)){
      readingList.splice(key, 1);
      break;
    }
  }
  //Once removed reload the main page
  res.redirect('/');
}

module.exports = {
  index,
  removeAlert,
  addToReadList,
  removeFromToReadList
}
