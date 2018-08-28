const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const user 			 = require('./routes/user.router')
const notes 	     = require('./routes/note.router')
const db 			 = require('../config/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/user', user)
app.use('/api/notes', notes)

module.exports = app;