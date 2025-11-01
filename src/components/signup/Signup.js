import React, { useContext, useState } from 'react'
import AlertContext from '../../context/alerts/alertContext'
import ModeContext from '../../context/mode/modeContex'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const showalert = useContext(AlertContext)
    const { showalerts } = showalert
    const lighting = useContext(ModeContext)
    const navigate = useNavigate()
    const [credential, setCredential] = useState({ name: "", username: "", Email: "", password: "", confirmpass: "", number: "" })
    const port=process.env.REACT_APP_PORT;
    const submit = async (e) => {
        e.preventDefault();
        if (credential.password !== credential.confirmpass) {
            showalerts("danger", `password not matched`)
        }
        else if(credential.number.length!==10){
            showalerts("danger", `invalid number`)
        }
        else {
            try {
                const response = await fetch(`${port}api/auth/createuser`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name: credential.name,username:credential.username, email: credential.Email, password: credential.password, number: credential.number }),
                });
                const data = await response.json();
                console.log(data)
                localStorage.setItem('token', data)
                navigate("/login");
            } catch (error) {
                showalerts("danger", `worange credentials`)
            }


        }

    }

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })

    }
    return (
        <div>
            <div>
                <form onSubmit={submit} className={`cantainer cantainer-${lighting.intialstate.mode} `}>
                    <div className='name'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter name " value={credential.name} onChange={onChange} />
                    </div>
                    <div className='name'>
                        <label htmlFor="username">username</label>
                        <input type="text" id="username" name="username" autoComplete="username" placeholder="username " value={credential.username} onChange={onChange} />
                    </div>
                    <div className='name'>
                        <label htmlFor="Email">Email</label>
                        <input type="text" id="Email" name="Email" placeholder="Enter email " value={credential.Email} onChange={onChange} />
                    </div>
                    {/* <div className='name'> */}
                    <div className='name'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter Pawwsord" autoComplete="new-password" value={credential.password} onChange={onChange} />
                    </div>
                    <div className='name'>
                        <label htmlFor="cpassword">confirm Password</label>
                        <input type="password" id="cpassword" name="confirmpass" placeholder="confirm-Pawwsord" autoComplete="confirm-password" value={credential.confirmpass} onChange={onChange} />
                    </div>
                    {/* </div> */}
                    <div className='name'>
                        <label htmlFor="number">number</label>
                        <input type="tel" id="number" name="number" placeholder="phone number " value={credential.number} onChange={onChange} />
                    </div>
                    <div className='submit'>
                        <button className='button' >create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
