var Waffle = require('../models/waffle');

// List of all Waffles
exports.waffle_list = async function(req, res) {
    try {
        theWaffles = await Waffle.find();
        res.send(theWaffles);
    }
    catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
    //res.send('NOT IMPLEMENTED: Waffle list');
};

// for a specific Waffle
exports.waffle_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Waffle detail: ' + req.params.id);
};

// Handle Waffle create on POST
exports.waffle_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Waffle create POST');
};

// Handle Waffle delete form on DELETE
exports.waffle_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Waffle delete DELETE ' + req.params.id);
};

// Handle Waffle update form on PUT
exports.waffle_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Waffle update PUT ' + req.params.id);  
};

// VIEWS

// Handle a show all view
exports.waffle_view_all_Page = async function(req, res) {
    try {
        theWaffles = await Waffle.find();
        res.render('waffle', {title: 'Waffle Search Results', results: theWaffles});
    }
    catch(err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};