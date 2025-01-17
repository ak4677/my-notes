import React, { useContext } from 'react'
import NoteContext from '../../context/notes/noteContext';
import ModeContext from '../../context/mode/modeContex';

export default function Home() {
    const a = useContext(NoteContext)
    const b= useContext(ModeContext)
    if(b.intialstate.mode==='dark'){
        document.body.style.backgroundColor='rgb(45,45,45)';
    }
    else{
        document.body.style.backgroundColor='white';
    }
    return (
        <div>
           this is use of contenxt {a.name} and b is {b.intialstate.mode}
        </div>
    )
}
