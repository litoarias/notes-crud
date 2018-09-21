var app = require('./app/app');
var port = process.env.PORT || 8080;

var server = app.listen(port, '51.75.22.148', () => {
  console.log('Express server listening on port ' + port);
});
