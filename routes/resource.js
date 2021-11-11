var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var waffle_controller = require('../controllers/waffle');

/// API ROUTE ///

// GET resources base.
router.get('/', api_controller.api);

/// Waffle ROUTES ///

// POST request for creating a Waffle.
router.post('/waffles', waffle_controller.waffle_create_post);

// DELETE request to delete Waffle.
router.delete('/waffles/:id', waffle_controller.waffle_delete);

// PUT request to update Waffle.
router.put('/waffles/:id', waffle_controller.waffle_update_put);

// GET request for one Waffle.
router.get('/waffles/:id', waffle_controller.waffle_detail);

// GET request for list of all Waffle items.
router.get('/waffles', waffle_controller.waffle_list);
module.exports = router;