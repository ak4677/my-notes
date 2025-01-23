const express = require('express');
const router = express.Router();
const notes = require('../modules/Notes');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

//fetching notes of user using port /api/notes/fetchnotes

router.get('/fetchnotes', fetchuser, async (req, res) => {
    try {
        const allNotes = await notes.find({ user: req.user.id })
        res.json(allNotes)
    } catch (error) {
        console.error(error.message)
        res.status(400).send("some error occure fetchnotes")
    }

})

//Add notes of user using port /api/notes/AddNotes
router.post('/AddNotes',fetchuser, [
    body('title').isLength({ min: 3 }),
    body('description').isLength({ min: 5 }),
], async (req, res) => {
    const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }
    try {
        
        let newNote= await notes.create({
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag,
            user: req.user.id,
            color: req.body.color
        })
        const savenote=await newNote.save();
        res.json(savenote);

    } catch (error) {
        console.error(error.message)
        res.status(400).send("some error occure in addnotes")
    }
})

//Edit note of user using port /api/notes/updatenote
router.put('/updatenote/:id',fetchuser, [
    body('title').isLength({ min: 3 }),
    body('description').isLength({ min: 5 }),
], async (req, res) => {
    const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }
    try {
        const note= {}
        console.log("hello0.1")
        if(req.body.title){note.title=req.body.title}
        if(req.body.description){note.description=req.body.description}
        if(req.body.tag){note.tag=req.body.tag}
        console.log("hello0.2")
        if(req.body.color){note.color=req.body.color}
        console.log("hello0.3")

        let findnote= await notes.findById(req.params.id)
        if(!findnote){res.status(404).send("notes not found!")}
        if(findnote.user && findnote.user.toString()!==req.user.id){res.status(420).send("unauthorized person detected")}
        console.log("hello1")
        findnote= await notes.findByIdAndUpdate(req.params.id,{$set: note},{new: true})
        res.json(findnote)
    } catch (error) {
        console.error(error.message)
        res.status(400).send("some error occure in updatnote")
    }
})

//deleting note of user using port /api/notes/deletenote
router.delete('/deletenote/:id',fetchuser, async (req, res) => {
    try {
        let findnote= await notes.findById(req.params.id)
        if(!findnote){res.status(404).send("notes not found!")}
        if(findnote.user && findnote.user.toString()!==req.user.id){res.status(420).send("unauthorized person detected")}

        findnote= await notes.findByIdAndDelete(req.params.id)
        res.json({"delete":"successuflly", note: findnote})
    } catch (error) {
        console.error(error.message)
        res.status(400).send("some error occure in deletenote")
    }
})

module.exports = router;