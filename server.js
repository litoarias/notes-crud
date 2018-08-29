var app = require('./app/app');
var port = process.env.PORT || 8000;

var server = app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});