# SecondTreasuresBookstoreSite
Built by: Josh Rintoul
Version 1.0

The Second Treasures Bookstore wanted a site that allowed an online list of their inventory and give the users a chance to create a reading list that can be used for the book club.
## Structure
* app
  * app_server
    * controllers
      * about_controller.js
      * books_controller.js
      * contact_controller.js
      * events_controller.js
    * models
      * books.js
    * routes
      * appRouter.js
    * views
      * layouts
        * layout.pug
      * about.pug
      * contact.pug
      * error.pug
      * events.pug
      * index.pug
      * singleBook.pug
      * thanks.pug
    * bin
    * node_modules
    * public
      * images
        * Bookstore.jpg
        * chest.png
        * underconstruction.png
      * javascripts
      * stylesheets
        * style.css
    * app.js
    * package.json

### Technologies Used
* Node.js - The webserver was developed using the node framework
* JavaScript - The main language for the middleware was developed in JavaScript
* Pug - The View framework used was Pug for use with the MEAN stack
* Bootstrap - The view framework was empowered with Bootstrap for rapid development and beautified with Bootstraps stylesheets
