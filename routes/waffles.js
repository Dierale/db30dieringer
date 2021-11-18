var express = require('express');
var router = express.Router();

// Require controller modules.
//var api_controller = require('../controllers/api');
var waffles_controler = require('../controllers/waffles');

/* GET detail waffle page */
router.get('/detail', waffles_controler.waffle_view_one_Page);

/* GET create waffle page */
router.get('/create', waffles_controler.waffle_create_Page);

/* GET waffle update page */
router.get('/update', waffles_controler.waffle_update_Page);

module.exports = router;