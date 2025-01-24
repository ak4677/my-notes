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
            navigate("/Login");
        }
    }, [localStorage.getItem('token')])
    return (
        <>
            <div id="home" className={`notes-container `}>
                <h1 className={`nav-${mode.intialstate.mode}`}>NOTES</h1>
                <div><Notes /></div>
            </div>
        </>
    )
}
