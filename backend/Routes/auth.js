const express = require("express")
const user = require("../modules/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetchuser = require('../middleware/fetchuser')
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
        return res.status(400).send("some error occure");
    }

    try {
        //checking there is no dupclicade email
        let newuser = await user.findOne({ email: req.body.email })
        console.log(newuser)
        if (newuser) {
            return res.status(420).json({ user: "user already exit" })
        }

        // securing password by adding some noise and encrption 
        const salt = bcrypt.genSaltSync(10);
        const securepass = bcrypt.hashSync(req.body.password, salt)

        // loading data on to database 
        newuser = await user.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: securepass,
            number: req.body.number
        })

        //sign user data 
        const data = {
            user: {
                id: newuser.id
            }
        }
        const token = jwt.sign(data, secret_signature)
        res.json({token})
        // console.log(token)

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
    let status = false
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
        // console.log("hello")
        // res.send("hello")
        //sign user data 
        const data = {
            user: {
                id: existuser.id
            }
        }
        const token = jwt.sign(data, secret_signature)
        // status=true
        res.json(token)
        // console.log(token)

    } catch (error) {
        console.error(error.message)
        res.status(400).send("some error occure")
    }
})


// geting user detail after login for user using router /api/auth/getlogin :login required

router.post('/getlogin', fetchuser, async (req, res) => {

    try {
        let status = false
        const userId = req.user.id
        getuser = await user.findOne(userId).select("-password")
        status = true
        res.json(status, getuser)

    } catch (error) {
        console.error(error.message)
        res.status(400).send("some error occure in token")
    }
})

module.exports = router