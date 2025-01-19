import React, { useContext, useState } from 'react'
import './Notesitem.css'
import NoteContext from '../../context/notes/noteContext'
import Edit from '../edit/Edit'



export default function Notesitem(props) {

  const getinginfo = useContext(NoteContext)
  const { deletenote} = getinginfo
  const [on,off]=useState(false)
  const update=()=>{
    off(true);
  }
  return (
    <>
    {on&&<Edit  id={props.note._id} title={props.note.title} description={props.note.description} tag={props.note.tag}/>}
    <div className='noteitem-cont'>
      <div className='details'>
        <h1 className='title'>{props.note.title} </h1>
        <p>{props.note.description}</p>
        <div >
          <i className="fa-solid fa-trash-can pointer" onClick={() => deletenote(props.note._id,props.note.title)}></i>
          <i className="fa-regular fa-pen-to-square pointer" onClick={update}></i>
          <span>{props.note.tag}</span>
        </div>
      </div>
    </div>
    </>
  )
}