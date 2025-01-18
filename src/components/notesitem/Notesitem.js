import React from 'react'
import './Notesitem.css'
export default function Notesitem(props) {
  return (
      <div className='noteitem-cont'> 
        <div className='details'>
            <h1 className='title'>{props.note.title} </h1>
            <p>{props.note.description}</p>
            <i className="fa-solid fa-trash-can space">&nbsp;&nbsp;</i>
            <i className="fa-regular fa-pen-to-square"></i>
        </div>
    </div>
  )
}

