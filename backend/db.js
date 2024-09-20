const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://MrinmoyTest:rzbKJnSYvLPoRObz@cluster0.ae2wu.mongodb.net/todo")

const todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed:{
        type: Boolean,
        default: false
    }
})


const todo = mongoose.model('todos', todoschema);

module.exports = {
    todo
}