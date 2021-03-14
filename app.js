//update check

const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();
var bodyParser = require('body-parser')
 
// create application/json parser
var jsonParser = bodyParser.json()
 
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.use('/', router);

router.get('/', function (req, res) {
    res.render('index0313');
});

router.get('/privacy', function (req, res) {
  res.render('privacy1223');
});

const ses = require('./public/js/ses');

router.post('/email', ses.sendEmail);

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
  res.send('we got the error');
});

module.exports = app;