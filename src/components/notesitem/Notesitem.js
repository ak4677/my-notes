import React, { useContext } from 'react'
import './Notesitem.css'
import NoteContext from '../../context/notes/noteContext'



export default function Notesitem(props) {

  const getinginfo = useContext(NoteContext)
  const { deletenote,editnote } = getinginfo

  return (
    <div className='noteitem-cont'>
      <div className='details'>
        <h1 className='title'>{props.note.title} </h1>
        <p>{props.note.description}</p>
        <div >
          <i className="fa-solid fa-trash-can pointer" onClick={() => deletenote(props.note._id,props.note.title)}></i>
          <i className="fa-regular fa-pen-to-square pointer" onClick={()=>editnote(props.note._id)}></i>
          <span>{props.note.tag}</span>
        </div>
      </div>
    </div>
  )
}