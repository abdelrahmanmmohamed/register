const bookModel = require("../schema/books")


exports.getAllBooks =async function(req,res){
    try {
        const books = await bookModel.find()
        return res.json({"message":"Done", data:books})
    } catch (error) {
        return res.status(400).send({ message:err })
    }
}
exports.getBook =async function(req,res){
    try {
        const book = await bookModel.find({_id:req.params.id})
        if(book.length === o){
            return res.json({"message":"Book Not Found", data:[]})
        }
        else{
            return res.json({"message":"Done", data:book})
        }
      
    } catch (error) {
        return res.status(400).send({ message:err })
    }
}
exports.deleteBook =async function(req,res){
    try {
        await bookModel.findByIdAndDelete(req.params.id)
        return res.json({"message":"Book Delete", data:[]})
    } catch (error) {
        return res.status(400).send({ message:err })
    }
}
exports.updateBook =async function(req,res){
    try {
        await bookModel.findByIdAndUpdate(req.params.id,req.body)
        return res.json({"message":"Book Update", data:book})
    } catch (error) {
        return res.status(400).send({ message:err })
    }
}
exports.addBook =async function(req,res){
    try {
        const createBook = await bookModel.create(req.body)
        return res.json({"message":"Book Created", data:createBook})
    } catch (error) {
        return res.status(400).send({ message:err })
    }
}