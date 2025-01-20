import React, { useContext, useState } from 'react'
import ModeContext from '../../context/mode/modeContex'
import NoteContext from '../../context/notes/noteContext'

export default function Edit(props) {
    const lighting = useContext(ModeContext)
    const getinginfo = useContext(NoteContext)
    const { editnote } = getinginfo
    const [newnote, setAddnote] = useState({_Id:`${props._Id}`, etitle: `${props.title}`, edescription: `${props.description}`, etag: `${props.tag}` })

    const add = (e) => {
        editnote(newnote._Id, newnote.etitle, newnote.edescription, newnote.etag)
        setAddnote({ etitle: newnote.etitle, edescription: newnote.edescription, etag: newnote.etag });
        props.onClose();
    }

    const onChange = (e) => {
        setAddnote({ ...newnote, [e.target.name]: e.target.value })
    }

    const notadd = (e) => {
        e.preventDefault();
        props.onClose(); // Close modal via parent component
      };
    
      const handleClickOutside = (e) => {
        if (e.target.id === "edit") {
          props.onClose(); // Close modal when clicking outside
        }
      };
    
      if (!props.visible) return null;
    return (
        <div id='edit' className={`editcontainer editcontainer-${lighting.intialstate.mode}`} onClick={handleClickOutside}>
            <form className={`editform nav-${lighting.intialstate.mode}`}>
                <div className='name'>
                    <label htmlFor="etitle">Title</label>
                    <input type="text" id="etitle" name="etitle" placeholder="title of the note " value={newnote.etitle} onChange={onChange} />
                </div>
                <div className='name'>
                    <label htmlFor="efield">Tag</label>
                    <input type="text" id="efield" name="etag" placeholder="Enter a tag or it will be default" value={newnote.etag} onChange={onChange} />
                </div>
                <div className='name'>
                    <label htmlFor="esubject">Description</label>
                    <textarea id="esubject" name="edescription" placeholder="notes..." value={newnote.edescription} onChange={onChange} />
                </div>
                <div className='submit'>
                    <button className='button' onClick={add}>update</button>
                    <button className='button' onClick={notadd}>close</button>
                </div>
            </form>
        </div>
    )
}
