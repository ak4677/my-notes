import React, { useContext } from 'react'
import NoteContext from '../../context/notes/noteContext'
import Notesitem from '../notesitem/Notesitem'



export default function Notes() {

    const fetchingnotes = useContext(NoteContext)
    const {notes} = fetchingnotes

    return (
        <div>
            {notes.map((note) => {
                return (<Notesitem key={note._id} note={note}/> );
            })}
        </div>
    )
}
