import { useState } from "react";
import React from 'react'
import AlertContext from './alertContext'

export default function AlertState(props) {
    const [alert,setalert]=useState({"typ":"","msg":""});
    const showalerts=(type, message)=>{
        setalert({
          msg:message,
          typ: type
        })
        setTimeout(() => {
          setalert("")
        }, 3000);
      }
    const timeout=()=>{
        setalert("")
    }
    return (
        <div><AlertContext.Provider value={{ alert, setalert,showalerts,timeout}}>
            {props.children}
        </AlertContext.Provider>
        </div>
    )
}
