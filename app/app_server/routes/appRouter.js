/*
appRouter directs server to the pages selected by the user and handles all the POST, GET, DELETE requests the user wishes to do
*/
var express = require('express');
var router = express.Router();
/* Links to the Controllers */
var mainController = require('../controllers/main_controller');
var aboutController = require('../controllers/about_controller');
var contactController = require('../controllers/contact_controller');
var bookController = require('../controllers/books_controller');
var eventsController = require('../controllers/events_controller')

/* GET home page from the controller. */
router.get('/', mainController.index);
router.get('/removeAlert', mainController.removeAlert);
/* POST to the to read list. Will add to a Database when backend is implemented*/
router.post('/', mainController.addToReadList);
/*DELETE the selected item from the users ToReview list*/
router.get('/delete/:isbn', mainController.removeFromToReadList);
/*GET about page*/
router.get('/about', aboutController.about);

/*GET single books information*/
router.get('/book/:isbn', bookController.getSingleBook);
router.post('/book', mainController.addToReadList)

/*GET the events page */
router.get('/events', eventsController.events);
/*GET contact page*/
router.get('/contact', contactController.contact);
router.post('/contact', contactController.postContact);

module.exports = router;
