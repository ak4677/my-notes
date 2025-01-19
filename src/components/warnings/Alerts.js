import React, { useContext} from 'react'
import './Alerts.css'
import AlertContext from '../../context/alerts/alertContext'
export default function Alerts(props) {
  const usealert=useContext(AlertContext)
  const {timeout}=usealert
  return (
   usealert.alert.typ&&<>
      <div className={`alert alert-${usealert.alert.typ} `} role='alert'>
        <span>
          {/* <strong >{usealert.alert.typ}: </strong> */}
          <span>{usealert.alert.msg}</span>
        </span>
        <span className='cross' onClick={()=>timeout()} >&times;</span>
      </div>
    </>
  )
}


