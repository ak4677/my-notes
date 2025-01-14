const express = require("express")
const user = require("../modules/User")
const { body, validationResult } = require('express-validator');
const router = express.Router();


router.post('/', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('number').isLength({ min: 10 }, { max: 10 }),
    body('password').isLength({ min: 5 }),
], async (req, res) => {

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    let newuser = await user.findOne({ email: req.body.email })
    console.log(newuser)
    if (newuser) {
        return res.status(400).json({ emain: "already  hman exist" })
    }
    
    newuser = await user.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number
    }).then(user => res.json(user))
        .catch(err => console.log(err))

})

module.exports = router