const mongoose = require('mongoose')
var Schema = mongoose.Schema

// Define collection and schema for todo item
let todoSchema = new Schema({
  content: { type: String },
  done: { type: Boolean }
})

module.exports = mongoose.model('todo', todoSchema)
