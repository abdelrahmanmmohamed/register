const express = require("express");
const authMidleware = require("../midlewares/auth")
const book = express.Router()
const bookControllers = require("../controllers/book")
book.get("/api/books",authMidleware,bookControllers.getAllBooks)
book.get("/api/books/:id",authMidleware,bookControllers.getBook)
book.delete("/api/books/:id",authMidleware,bookControllers.deleteBook)
book.put("/api/books/:id",authMidleware,bookControllers.updateBook)
book.post("/api/books",authMidleware,bookControllers.addBook)

module.exports = book