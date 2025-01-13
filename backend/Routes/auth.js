const express=require("express")
const User=require("../modules/User")
const router=express.Router();
router.get('/',(req,res)=>{
    console.log(req.body)
    res.send(req.body);
    const user=User(req.body);
    user.save()
})

module.exports= router