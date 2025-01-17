// import { Link } from 'react-router-dom'
import NoteContext from '../../context/notes/NoteContext'
// import NoteState from '../../context/notes/NoteState'
import './Navbar.css'
import React, { useContext } from 'react'



export default function Navbar() {
    const context=useContext(NoteContext);
    return (
        <>
            <div className="container">
                <div className='nav-container nav-dark'>
                    <div className='left-nav'>
                        {/* <Link to='/'>Home</Link> */}
                        <h1>{context.name}</h1>
                        <a href='/'>home</a>
                        <a href='/'>home</a>
                        <a href='/'>home</a>
                        <a href='/'>home</a>
                        <a href='/'>home</a>
                    </div>
                    <div className='right-nav'>
                        <a href='/'>home</a>
                        <a href='/'>home</a>
                    </div>
                </div>
            </div>
        </>
    )
};