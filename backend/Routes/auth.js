const express = require("express")
const user = require("../modules/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetchuser=require('../middleware/fetchuser')
const router = express.Router();

const secret_signature = "here i am giving my sign for user identification"

//creating user with velid chekcpoints and encrption using port /api/auth/createuser
router.post('/createuser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('number').isLength({ min: 10 }, { max: 10 }),
    body('password').isLength({ min: 5 }).exists(),
], async (req, res) => {

    // chekcking all data is correct formate of not 
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    try {
        // securing password by adding some noise and encrption 
        const salt = bcrypt.genSaltSync(10);
        const securepass = bcrypt.hashSync(req.body.password, salt)


        //checking there is no dupclicade email
        let newuser = await user.findOne({ email: req.body.email })
        console.log(newuser)
        if (newuser) {
            return res.status(400).json({ emain: "already  user exist" })
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
        const data = {
            user: {
                id: user.id
            }
        }
        const token = jwt.sign(data, secret_signature)
        console.log(token)

    } catch (error) {
        console.error(error.message)
        res.status(420).send("some error occure")
    }
})


//chekcing for correct user from port /api/auth/login :no login required
router.post('/login', [
    body('email').isEmail(),
    body('password').exists(),
], async (req, res) => {

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(420).send("wrong credentials");
    }
    try {

        //find if user exit or not using email
        const existuser = await user.findOne({ email: req.body.email })
        if (!existuser) {
            return res.status(420).send("wrong email");
        }

        //check user's given password is correct or not 
        const passcomper = await bcrypt.compare(req.body.password, existuser.password)
        if (!passcomper) {
            return res.status(420).send("wrong password");
        }

        //sign user data 
        const data = {
            user: {
                id: user.id
            }
        }
        const token = jwt.sign(data, secret_signature)
        res.json(token)
        console.log(token)

    } catch (error) {
        console.error(error.message)
        res.status(400).send("some error occure")
    }
})


// geting user detail after login for user using router /api/auth/getlogin :login required

router.post('/getlogin',fetchuser, async (req, res) => {

    try{
        const userId=req.user.username
        getuser=await user.findOne(userId).select("-password")
        res.json(getuser)

    } catch (error) {
        console.error(error.message)
        res.status(400).send("some error occure in token")
    }
})

module.exports = router