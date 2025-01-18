import React, { useContext } from 'react'
import NoteContext from '../../context/notes/noteContext'
import Notesitem from '../notesitem/Notesitem'
import './Notes.css'
export default function Notes() {
    const fetchingnotes = useContext(NoteContext)
    const { notes, setNotes } = fetchingnotes
    return (
        <div>
            {notes.map((note) => {
                return (<div key={note._id}><Notesitem note={note}/></div> );
            })}
        </div>
    )
}
