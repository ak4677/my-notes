import React, { useContext, useState } from 'react'
import './Notesitem.css'
import NoteContext from '../../context/notes/noteContext'
import Edit from '../edit/Edit'



export default function Notesitem(props) {

  const getinginfo = useContext(NoteContext)
  const { deletenote} = getinginfo
  const [off,on]=useState(false)
  const update=()=>{
    on(true);
  }
  const hideEdit = () => on(false);
  return (
    <>
    {off&&<Edit visible={on} onClose={hideEdit} _Id={props.note._id} title={props.note.title} description={props.note.description} tag={props.note.tag}/>}
    <div className='noteitem-con'>
      <div className='details'>
        <h2 className='title'>{props.note.title} </h2>
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