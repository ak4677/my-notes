import React, { useState } from 'react'
import ModeContext from './modeContex'

export default function ModeState(props) {
    const mode = { "mode": "light" }
    const [intialstate, setMode] = useState(mode)
    return (
        <div>
            <ModeContext.Provider value={{ intialstate,setMode}}>
                {props.children}
            </ModeContext.Provider>
        </div>
    )
}
