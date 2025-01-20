import React, { useContext } from 'react'
import NoteContext from '../../context/notes/noteContext'
import Notesitem from '../notesitem/Notesitem'
import './Notes.css'
import ModeContext from '../../context/mode/modeContex'


export default function Notes() {
    const mode = useContext(ModeContext)
    const fetchingnotes = useContext(NoteContext)
    const {notes} = fetchingnotes

    return (
        <div className={`items items-${mode.intialstate.mode}`}>
            {notes.map((note) => {
                return (<div key={note._id}><Notesitem   note={note}/> </div>);
            })}
        </div>
    )
}
