let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let businessController = require('../controllers/business');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET route for the Book List page - READ operation */
router.get('/', businessController.displayBookList);

/* GET route for displaying the Add page - CREATE operation */
router.get('/add', requireAuth, businessController.displayAddPage);

/* POST route for processing the Add page - CREATE operation */
router.post('/add', requireAuth, businessController.processAddPage);

/* GET route for displaying the Edit page - UPDATE operation */
router.get('/edit/:id', requireAuth, businessController.displayEditPage);

/* POST route for displaying the Edit page - UPDATE operation */
router.post('/edit/:id', requireAuth, businessController.processEditPage);

/* GET to perform Deletion - DELETE operation */
router.get('/delete/:id', requireAuth, businessController.performDelete);

module.exports = router;