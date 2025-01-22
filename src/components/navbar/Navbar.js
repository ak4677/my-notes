import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import React, { useState } from 'react'
import { useContext } from 'react'
import ModeContext from '../../context/mode/modeContex'


export default function Navbar(props) {
    const changemode = useContext(ModeContext)
    const navigate=useNavigate();
    // console.log(changemode.intialstate.mode)
    const [navstate, setState] = useState(changemode.intialstate.mode)
    const logout=()=>{
        localStorage.clear()
        navigate("/login")
    }
    const togglemode = async () => {
        if (changemode.intialstate.mode === "light") {
            changemode.setMode({
                "mode": "dark"
            })
            setState('dark')
            document.body.style.backgroundColor = '#4d4d4d';
        }
        else {
            changemode.setMode({
                "mode": "light"
            })
            setState('light')
            document.body.style.backgroundColor = 'white';
        }
    }
    return (
        <>
            <div className="container">
                <div className={`nav-container nav-${navstate}`}>
                    <div className='left-nav'>
                        {/* <Link to='/'>Home</Link> */}
                        <Link to='/'>NOTES</Link>
                        <Link to='/home'>Home</Link>
                        <Link to='/Add-notes'>Add</Link>
                        {/* <Link to='/'>home</Link>
                        <Link to='/'>home</Link> */}
                    </div>
                    <div className='right-nav'>
                        <label className="switch">
                            <input type="checkbox" onClick={togglemode} />
                            <span className="slider round" ></span>
                        </label>
                        {!localStorage.getItem('token')?<>
                            <Link to='/Login' className='login-button'>Login</Link>
                            <Link to='/Signup' className='signup-button'>Signup</Link>
                        </>: <Link onClick={logout}className='login-button'>Log-out</Link>}
                    </div>
                </div>
            </div>
        </>
    )
};