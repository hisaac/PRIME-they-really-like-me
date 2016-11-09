var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var team = require('./routes/bios');
// use body parser on EVERY request
app.use(bodyParser.urlencoded({ extended: true }));

// Set port to listen on
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('server is listening on port ' + app.get('port'));
});


app.use('/bios', team);
app.use('/', index);
