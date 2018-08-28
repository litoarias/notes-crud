const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const port 			 = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const session 		 = require('express-session');
const db 			 = require('./config/database');
const router 		 = require('./app/routes')(app);
app.get('/checking', function(req, res){
	res.json({
	   "Tutorial": "Welcome to the Node express JWT Tutorial"
	});
 });
// listen on port $port
app.listen(port, () => {
	console.log('We are live on ' + port);
});  