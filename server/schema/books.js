const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const bookSchema = new Schema({
    name:String,
    author:String,
    discrption:String,
    price:Number
})

module.exports = mongoose.model("Books", bookSchema)