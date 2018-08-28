let mongoose = require('mongoose')
let noteSchema = new mongoose.Schema({
  body: String,
  title: String
})
module.exports = mongoose.model('Note', noteSchema) 