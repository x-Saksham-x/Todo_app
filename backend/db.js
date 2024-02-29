const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sakshamshrivas:rAz8uw2ogpuGDd4m@cluster0.xfbjjuw.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports={
    todo
}