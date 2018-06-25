/*
Author: Josh Rintoul
Email: josh.rint@gmail.com
GitHub: https://github.com/joshrint

Render the contact page for the bookstore
*/

const contact = function(req, res){
  res.render('contact', {
    title: 'Contact Second Treasures Bookstore'
  });
};
//Will eventually send an email to the store email address when that is set up. Currently just thanks them for the email
const postContact = function(req, res){
  res.render('thanks', {
    name: req.body.name
  })
}

//Export the contact and postContact functions to be accessed by the router
module.exports = {
  contact,
  postContact
}
