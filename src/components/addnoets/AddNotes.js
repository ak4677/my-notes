import React, { useContext } from 'react'
import './AddNotes.css'
import ModeContext from '../../context/mode/modeContex'
export default function AddNotes() {
  const lighting=useContext(ModeContext)
  return (
    <div className={`cantainer cantainer-${lighting.intialstate.mode}`}>
      <form className='form'>
        <div className='title'>
          <div className='name'>
            <label htmlFor="topic">Title</label>
          </div>
          <div className='entry'>
            <input type="text" id="topic" name="title" placeholder="title of the note" />
          </div>
        </div>
        <div className='tag'>
          <div className='name'>
            <label htmlFor="field">Tag</label>
          </div>
          <div className='entry'>
            <input type="text" id="field" name="description" placeholder="Enter a tag or it will be default" />
          </div>
        </div>
        <div className='description'>
          <div className='name'>
            <label htmlFor="subject">Description</label>
          </div>
          <div className='entry'>
            <textarea id="subject" name="description" placeholder="notes..." />
          </div>
        </div>
        <div className='submit'>
            <button className='button'>Submit</button>
        </div>
      </form>
    </div>
  )
}
