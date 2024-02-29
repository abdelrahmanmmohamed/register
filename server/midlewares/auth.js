const jwt = require("jsonwebtoken")


module.exports = (req,res,next) => {
    try {
        const fullToken = req.headers.authorization
        const token = fullToken?.split(' ')[1]
        if(!token) return res.status(403).send("Access Denied")

        const decodedToken = jwt.verify(token,'shhhh')
        req.user = decodedToken
        next()
        

    } catch (error) {
        console.log(err)
        res.send(err)
    }
}