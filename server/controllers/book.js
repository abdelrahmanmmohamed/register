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
        const Role = req.user.role
        if(Role === "Admin"){
            await bookModel.findByIdAndDelete(req.params.id)
            return res.json({"message":"Book Delete", data:[]})
        }else{
            return res.status(403).send("Access Denied")
        }
     
    } catch (error) {
        return res.status(400).send({ message:err })
    }
}
exports.updateBook =async function(req,res){
    try {
        const Role = req.user.role
        if(Role){
            await bookModel.findByIdAndUpdate(req.params.id,req.body)
            return res.json({"message":"Book Update", data:[]})
        }else{
            return res.status(403).send("Access Denied")
        }
       
    } catch (error) {
        return res.status(400).send({ message:err })
    }
}
exports.addBook =async function(req,res){
    try {
        const Role = req.user.role
        if(Role ==="Admin"){
            const createBook = await bookModel.create(req.body)
            return res.json({"message":"Book Created", data:createBook})
        }else{
            return res.status(403).send({message: "Access Denied"})
        }
       
    } catch (error) {
        return res.status(400).send({ message:err })
    }
}