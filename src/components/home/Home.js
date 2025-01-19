import React, { useContext, useEffect } from 'react'
import Notes from '../notes/Notes'
import ModeContext from '../../context/mode/modeContex'
import NoteContext from '../../context/notes/noteContext'



export default function Home() {
    const mode = useContext(ModeContext)
    const fetching = useContext(NoteContext)
    const { fetchnote } = fetching;
    useEffect(() => {
        fetchnote();
    }, [])
    return (
        <>
            {/* <div className={`cantainer cantainer-${lighting.intialstate.mode}`}>
                <form className='form'>
                    <div className='title'>
                        <div className='name'>
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className='entry'>
                            <input type="text" id="title" name="title" placeholder="title of the note " onChange={onChange} />
                        </div>
                    </div>
                    <div className='tag'>
                        <div className='name'>
                            <label htmlFor="field">Tag</label>
                        </div>
                        <div className='entry'>
                            <input type="text" id="field" name="tag" placeholder="Enter a tag or it will be default" onChange={onChange} />
                        </div>
                    </div>
                    <div className='description'>
                        <div className='name'>
                            <label htmlFor="subject">Description</label>
                        </div>
                        <div className='entry'>
                            <textarea id="subject" name="description" placeholder="notes..." onChange={onChange} />
                        </div>
                    </div>
                    <div className='submit'>
                        <button className='button' onClick={add}>Submit</button>
                    </div>
                </form>
            </div> */}
            <div id="home" className={`notes-container nav-${mode.intialstate.mode}`}>
                <h1>NOTES</h1>
                <Notes />
            </div>
        </>
    )
}
