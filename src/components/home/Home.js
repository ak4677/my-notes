import React, { useContext } from 'react'
import Notes from '../notes/Notes'
import '../notes/Notes.css'
import ModeContext from '../../context/mode/modeContex'

export default function Home() {
    const mode=useContext(ModeContext)
    return (
        <div id="home" className={`notes-container nav-${mode.intialstate.mode}`}>
            <h1>NOTES</h1>
            <Notes/>
        </div>
    )
}
