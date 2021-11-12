var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Establish connection to Atlas MongoDB
const connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

// Get the default connection
var db = mongoose.connection;

// Bind connection to an error event
db.on('error', console.error.bind(console, 
  "MongoDB connection error."));
db.once("open", function() {
  console.log("Connection to DB succeeded")
});

// Models
var Waffle = require("./models/waffle");

// Seed data into MongoDB
//server start
async function recreateDB() {
  await Waffle.deleteMany();

  let instance1 = new Waffle({
    size: 5,
    color: "Golden",
    cooking_state: "Cooked",
    topping: ["Cheese", "Pepperoni"]
  });
  instance1.save(function(err,doc) {
    if(err) return console.error(err);
    console.log("First object saved");
  });

  let instance2 = new Waffle({
    size: 7,
    color: "Golden",
    cooking_state: "Perfect",
    topping: ["Syrup", "Rapsberries", "Sprinkles"]
  });
  instance2.save(function(err,doc) {
    if(err) return console.error(err);
    console.log("Second object saved");
  });

  let instance3 = new Waffle({
    size: 10,
    color: "Dark Brown",
    cooking_state: "Burnt",
    topping: ["Chocolate"]
  });
  instance3.save(function(err,doc) {
    if(err) return console.error(err);
    console.log("Third object saved");
  });
}

let reseed = true;
if (reseed) { recreateDB()};

// Routers for web pages
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var waffleRouter = require('./routes/waffle');
var modsRouter = require('./routes/addmods');
var selectRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var wafflesRouter = require('./routes/waffle');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Create routers for web app
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/waffle', waffleRouter);
app.use('/addmods', modsRouter);
app.use('/selector', selectRouter);
app.use('/resource', resourceRouter);
app.use('/waffles', wafflesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

