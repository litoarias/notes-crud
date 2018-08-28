var app = require('./app/app');
var port = process.env.PORT || 8000;
console.log('port ' + port)
var server = app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});