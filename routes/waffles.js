var express = require('express');
var router = express.Router();

// Require controller modules.
//var api_controller = require('../controllers/api');
var waffles_controler = require('../controllers/waffles');

// Function to check if user is authorized
// Continue if so, redirect to login if not
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
};

/* GET detail waffle page */
router.get('/detail', waffles_controler.waffle_view_one_Page);

/* GET create waffle page */
router.get('/create', secured, waffles_controler.waffle_create_Page);

/* GET waffle update page */
router.get('/update', secured, waffles_controler.waffle_update_Page);

/* GET create waffle page */
router.get('/delete', secured, waffles_controler.waffle_delete_Page);

module.exports = router;