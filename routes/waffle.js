var express = require('express');
const waffle_controllers = require('../controllers/waffle');
var router = express.Router();

/* GET waffle page. */
router.get('/', waffle_controllers.waffle_view_all_Page);

module.exports = router;
