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
exports.waffle_detail = async function(req, res) {
    console.log("detail" + req.params.id);
    try{
        result = await Waffle.findById( req.params.id);
        res.send(result);
    } catch(error) {
        res.status(500);
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
    //res.send('NOT IMPLEMENTED: Waffle detail: ' + req.params.id);
};

// Handle Waffle create on POST
exports.waffle_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Waffle();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.size = req.body.size; 
    document.color = req.body.color; 
    document.cooking_state = req.body.cooking_state;
    document.toppings = req.body.toppings;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
    //res.send('NOT IMPLEMENTED: Waffle create POST');
};

// Handle Waffle delete form on DELETE
exports.waffle_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Waffle delete DELETE ' + req.params.id);
};

// Handle Waffle update form on PUT
exports.waffle_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Waffle.findById( req.params.id)
    
        // Do updates of properties
        if(req.body.waffle_size)
            toUpdate.waffle_size = req.body.waffle_size;
        if(req.body.color) 
            toUpdate.color = req.body.color;
        if(req.body.cooking_state) 
            toUpdate.cooking_state = req.body.cooking_state;
        if(req.body.toppings)
            toUpdate.toppings = req.body.toppings;
        
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
        } catch (err) {
            res.status(500)
            res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
        }
    //res.send('NOT IMPLEMENTED: Waffle update PUT ' + req.params.id);  
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