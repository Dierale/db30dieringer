var express = require('express');
var router = express.Router();

/* GET waffle page. */
router.get('/', function(req, res, next) {
  res.render('waffle', { title: 'Search Results: Waffle' });
});

module.exports = router;
