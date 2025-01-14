const jwt = require('jsonwebtoken')
const secret_signature = "here i am giving my sign for user identification"


const fetchuser=(req,res,next)=>{
    const token=req.header('auth-token')
    if(!token){
        res.status(401).send("authenticate please")
    }
    try {
        const verify=jwt.verify(token,secret_signature)
        req.user = verify.user
        next()
    } catch (error) {
        res.status(401).send("token sahi kar le bhai")
    }   
}

module.exports=fetchuser;