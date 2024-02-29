const express = require("express");
const mongoose = require("mongoose");
const app = express()
app.use(express.json())
const bookRouter = require("./routers/book")
const userRouter = require("./routers/user")

mongoose.connect("mongodb://abdo:abdo123123@ac-x3lqjsu-shard-00-00.mgpp6d6.mongodb.net:27017,ac-x3lqjsu-shard-00-01.mgpp6d6.mongodb.net:27017,ac-x3lqjsu-shard-00-02.mgpp6d6.mongodb.net:27017/?replicaSet=atlas-11kbdy-shard-0&ssl=true&authSource=admin")
 
app.use("/", userRouter)
app.use("/", bookRouter)

app.listen("8000",()=>{
    console.log("connect server")
})