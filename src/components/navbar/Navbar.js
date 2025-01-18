import { Link } from 'react-router-dom'
import './Navbar.css'
import React, { useState } from 'react'
import { useContext } from 'react'
import ModeContext from '../../context/mode/modeContex'


export default function Navbar(props) {
    const changemode = useContext(ModeContext)
    console.log(changemode.intialstate.mode)
    const [navstate, setState] = useState(changemode.intialstate.mode)
    const togglemode = async () => {
        if (changemode.intialstate.mode === "light") {
            changemode.setMode({
                "mode": "dark"
            })
            setState('dark')
            document.body.style.backgroundColor='#4d4d4d';
        }
        else {
            changemode.setMode({
                "mode": "light"
            })
            setState('light')
            document.body.style.backgroundColor='white';
        }
    }
    return (
        <>
            <div className="container">
                <div className={`nav-container nav-${navstate}`}>
                    <div className='left-nav'>
                        {/* <Link to='/'>Home</Link> */}
                        <Link to='/'>Notes</Link>
                        <Link to='/home'>Home</Link>
                        <Link to='/Add-notes'>Add-notes</Link>
                        <Link to='/'>home</Link>
                        <Link to='/'>home</Link>
                    </div>
                    <div className='right-nav'>
                        <label className="switch">
                            <input type="checkbox" onClick={togglemode} />
                            <span className="slider round" ></span>
                        </label>
                        <Link to='/'>home</Link>
                    </div>
                </div>
            </div>
        </>
    )
};