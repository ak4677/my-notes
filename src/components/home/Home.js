import React, { useContext } from 'react'
import NoteContext from '../../context/notes/NoteContext'

export default function Home() {
    const a = useContext(NoteContext)
    return (
        <div>
            <h1>this is use of contenxt {a}</h1>
        </div>
    )
}
