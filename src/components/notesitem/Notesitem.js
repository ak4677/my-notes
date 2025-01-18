import React from 'react'
import './Notesitem.css'
export default function Notesitem(props) {
  return (
      <div className='noteitem-cont'>
        <div className='details'>
            <h1 className='title'>{props.note.title} </h1>
            <p>{props.note.description}</p>
        </div>
    </div>
  )
}

