/*
Author: Josh Rintoul
Email: josh.rint@gmail.com
GitHub: https://github.com/joshrint

This controller renders the events page pulling from a google calendar for the store.
*/

//Render the events page. May have other functions later on
const events = function(req, res){
  res.render('events', {
    title: 'events'
  });
};

//export the events function to be accessed by the router
module.exports = {
  events
};
