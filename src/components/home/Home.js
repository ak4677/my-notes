import React, { useContext, useEffect } from 'react'
import ModeContext from '../../context/mode/modeContex'
import NoteContext from '../../context/notes/noteContext'
import Notes from '../notes/Notes'
import { useNavigate } from 'react-router-dom'



export default function Home() {
    const mode = useContext(ModeContext)
    const fetching = useContext(NoteContext)
    const navigate=useNavigate()
    const { fetchnote } = fetching;

    
    useEffect(() => {
        if(localStorage.getItem('token')){
            fetchnote();
        }
        else{
            navigate("/login");
        }
    }, [localStorage.getItem('token')])
    return (
        <>
            <div id="home" className={`notes-container nav-${mode.intialstate.mode}`}>
                <h1>NOTES</h1>
                <div><Notes /></div>
            </div>
        </>
    )
}
