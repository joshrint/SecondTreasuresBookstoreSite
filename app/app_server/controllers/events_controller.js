/*
Author: Josh Rintoul
Email: josh.rint@gmail.com
GitHub: https://github.com/joshrint

This controller renders the events page pulling from a google calendar for the store.
*/
const events = function(req, res){
  res.render('events', {
    title: 'events'
  });
};

module.exports = {
  events
};
