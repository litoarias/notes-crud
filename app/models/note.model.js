const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  body: String,
  title: String
})

module.exports = mongoose.model('Note', noteSchema) 