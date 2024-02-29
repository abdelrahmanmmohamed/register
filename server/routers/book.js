const express = require("express");

const book = express.Router()
const bookControllers = require("../controllers/book")
book.get("/api/books",bookControllers.getAllBooks)
book.get("/api/books:id",bookControllers.getBook)
book.delete("/api/books:id",bookControllers.deleteBook)
book.put("/api/books:id",bookControllers.updateBook)
book.post("/api/books",bookControllers.addBook)

module.exports = book