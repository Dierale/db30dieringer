var Waffle = require('../models/waffle');

// Handle a show one view with id specified by query
exports.waffle_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Waffle.findById( req.query.id)
        res.render('waffledetail',
        { title: 'Waffle Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.waffle_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('wafflecreate', { title: 'Waffle Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a waffle.
// query provides the id 
exports.waffle_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Waffle.findById(req.query.id)
        res.render('waffleupdate', { title: 'Waffle Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};