const userModel = require("../schema/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
exports.register = async function(req,res){
    try {
        let newUser = new userModel(req.body)
        const hashPassword =await bcrypt.hash(req.body.password,10) 
        newUser.password = hashPassword
        let user = await newUser.save()

        return res.json({message:"User Register sucessfully", user:{name:user.name,email:user.email}})
    } catch (error) {
       return res.status(400).send({ message:err })
    }
}



exports.login = async function(req,res){
    try {
         user = await userModel.findOne({email: req.body.email})
        if(!user){
            return res.status(401).json({message:"Authntication failed.. invalid email or password"})
        }
        if((await user.comperaPassword(req.body.password)) === false){
            return res.status(401).json({message:"Authntication failed.. invalid email or password"})

        }
        const token =jwt.sign({email:user.email ,name:user.name,_id:user.id},"shhhh")
        return res.json({message:"User Loggedin sucessfully", user:{name:user.name,email:user.email, token:token}})

    } catch (error) {
        return res.status(400).send({ message:err })
    }
}

