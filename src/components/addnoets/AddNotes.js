import React, { useContext, useEffect, useState } from 'react'
import './AddNotes.css'
import ModeContext from '../../context/mode/modeContex'
import NoteContext from '../../context/notes/noteContext'
import AlertContext from '../../context/alerts/alertContext'
import { useNavigate } from 'react-router-dom'



export default function AddNotes() {

  const lighting = useContext(ModeContext)
  const getinginfo = useContext(NoteContext)
  const showalert=useContext(AlertContext)
  const navigate=useNavigate()
  const {showalerts}=showalert
  const { addnote } = getinginfo
  const [newnote, setAddnote] = useState({ title: "", description: "", tag: "" })

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/Login');
    }
  }, [navigate]);

  const add = (e) => {
    e.preventDefault();
    if (newnote.title && newnote.description) {
      addnote(newnote.title, newnote.description, newnote.tag);
      setAddnote({ title: "", description: "", tag: "" });
    } else {
      // e.preventDefault();
      showalerts("danger", "Title and description are required!");
    }
  }

  const onChange = (e) => {
    setAddnote({ ...newnote, [e.target.name]: e.target.value })
  }


  return (
    <><div className={`cantainer cantainer-${lighting.intialstate.mode}`}>
      <form className='form'>
        <div className='title'>
          <div className='name'>
            <label htmlFor="title">Title</label>
          </div>
          <div className='entry'>
            <input type="text" id="title" name="title" placeholder="title of the note " value={newnote.title} onChange={onChange} />
          </div>
        </div>
        <div className='tag'>
          <div className='name'>
            <label htmlFor="field">Tag</label>
          </div>
          <div className='entry'>
            <input type="text" id="field" name="tag" placeholder="Enter a tag or it will be default" value={newnote.tag} onChange={onChange} />
          </div>
        </div>
        <div className='description'>
          <div className='name'>
            <label htmlFor="subject">Description</label>
          </div>
          <div className='entry'>
            <textarea id="subject" name="description" placeholder="notes..." value={newnote.description} onChange={onChange} />
          </div>
        </div>
        <div className='submit'>
          <button className='button' onClick={add}>Submit</button>
        </div>
      </form>
    </div></>
  )
}
