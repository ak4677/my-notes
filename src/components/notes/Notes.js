import React, { useContext } from 'react'
import NoteContext from '../../context/notes/noteContext'
import Notesitem from '../notesitem/Notesitem'
import './Notes.css'
export default function Notes() {
    const fetchingnotes = useContext(NoteContext)
    const { notes, setNotes } = fetchingnotes
    return (
        <div>
            {/* <AddNotes /> */}
            {notes.map((note) => {
                return (<Notesitem key={note._id} note={note}/> );
            })}
        </div>
    )
}
