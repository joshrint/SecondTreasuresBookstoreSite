/*
Author: Josh Rintoul
Email: josh.rint@gmail.com
GitHub: https://github.com/joshrint

Render the about page for the store.
*/
const about = function(req, res){
  res.render('about', {
    //Bind the title and the about section to the javascript for security
    title: 'About Second Treasures Bookstore',
    about: 'Second Treasures Bookstore is a small used-book store in Outback, Canada. We host a book club that meets once a month to review and discuss books from a reading list, share some snacks and enjoy good company.'
  });
};


module.exports = {
  about
}
