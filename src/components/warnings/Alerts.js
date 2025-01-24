import React, { useContext, useEffect, useState } from 'react'
import './Alerts.css'
import AlertContext from '../../context/alerts/alertContext'
export default function Alerts(props) {
  const usealert = useContext(AlertContext)
  const [visible, setVisible] = useState(false);
  const {alert, timeout } = usealert
  useEffect(() => {
    if (alert.typ) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false); // Hide alert after 3 seconds
        timeout(); // Clear the alert from the context
      }, 3000);
      return () => clearTimeout(timer); // Cleanup on unmount or new alert
    }
  }, [alert, timeout]);
  return (
    <div className='alert-fixed-container'>
      {alert.typ &&<div  className={`alert alert-${alert.typ} ${visible ? 'visible' : 'hidden'}`} role='alert'>
        <span>
          {/* <strong >{usealert.alert.typ}: </strong> */}
          <span>{alert.msg}</span>
        </span>
        <div className='cross' onClick={() => timeout()} >&times;</div>
      </div>}
    </div>
  )
}


