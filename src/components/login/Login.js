import React, { useContext, useState } from 'react'
import {useNavigate } from "react-router-dom";
import ModeContext from '../../context/mode/modeContex'
import AlertContext from '../../context/alerts/alertContext'

export default function Login() {
    const showalert = useContext(AlertContext)
    const { showalerts } = showalert
    const lighting = useContext(ModeContext)
    const navigate=useNavigate()
    const [credential, setCredential] = useState({ Email: "", password: "" })

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: credential.Email, password: credential.password }),
            });
            const data=await response.json();
            // console.log(data)
            localStorage.setItem('token',data)
            navigate("/home");

        } catch (error) {
            showalerts("danger", `worange credentials`)
        }

    }

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form onSubmit={submit} className={`editform nav-${lighting.intialstate.mode}`}>
                <div className='name'>
                    <label htmlFor="Email">Email</label>
                    <input type="text" id="Email" name="Email" placeholder="Enter email " autoComplete="email"value={credential.Email} onChange={onChange} />
                </div>
                <div className='name'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" autoComplete="current-password" placeholder="Enter Pawwsord" value={credential.password} onChange={onChange} />
                </div>
                <div className='submit'>
                    <button className='button' >Log in</button>
                </div>
            </form>
        </div>
    )
}
