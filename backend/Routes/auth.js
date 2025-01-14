const express = require("express")
const user = require("../modules/User")
const { body, validationResult } = require('express-validator');
const bcrypt= require('bcryptjs')
const jwt=require('jsonwebtoken')
const router = express.Router();

const secret_signature="here i am giving my sign for user identification"

router.post('/', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('number').isLength({ min: 10 }, { max: 10 }),
    body('password').isLength({ min: 5 }),
], async (req, res) => {
    
    // chekcking all data is correct formate of not 
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    // securing password by adding some noise and encrption 
    const salt = bcrypt.genSaltSync(10);
    const securepass=bcrypt.hashSync(req.body.password, salt)

    
    //checking there is no dupclicade email
    let newuser = await user.findOne({ email: req.body.email })
    console.log(newuser)
    if (newuser) {
        return res.status(400).json({ emain: "already  hman exist" })
    }

    // loading data on to database 
    newuser = await user.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: securepass,
        number: req.body.number
    }).then(user => res.json(user))
        .catch(err => console.log(err))
        
    //sign user data 
    const data ={
        user:{
            id: user.id
        }
    }
    const token=jwt.sign(data, secret_signature)
    console.log(token)

})

module.exports = router