import React, { useContext, useEffect } from 'react'
import Notes from '../notes/Notes'
import ModeContext from '../../context/mode/modeContex'
import NoteContext from '../../context/notes/noteContext'



export default function Home() {
    const mode = useContext(ModeContext)
    const fetching = useContext(NoteContext)
    const { fetchnote } = fetching;
    useEffect(() => {
        fetchnote();
    }, [])
    return (
        <div id="home" className={`notes-container nav-${mode.intialstate.mode}`}>
            <h1>NOTES</h1>
            <Notes />
        </div>
    )
}
