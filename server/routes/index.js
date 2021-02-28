let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Products page. */
router.get('/products', indexController.displayProductsPage);

/* GET route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
