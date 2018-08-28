const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const port 			 = 8000;
const user 			 = require('./app/routes/user.router')
const notes 	     = require('./app/routes/note.router')
const db 			 = require('./config/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', user)
app.use('/notes', notes)

app.listen(port, () => {
	console.log('We are live on ' + port);
});  