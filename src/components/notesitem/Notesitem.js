import React, { useContext, useState } from 'react'
import './Notesitem.css'
import NoteContext from '../../context/notes/noteContext'
import Edit from '../edit/Edit'



export default function Notesitem(props) {
  const [color, setcolor] = useState(`${props.note.color}`)
  const getinginfo = useContext(NoteContext)
  const { deletenote,editnote } = getinginfo
  const [isEditVisible, setEditVisible] = useState(false)
  const update = () => setEditVisible(true);
  
  const hideEdit = () => setEditVisible(false);
  const changecolor = (e) => {
    setcolor(e)
    editnote(props.note._id, props.note.title, props.note.description, props.note.tag, e)
  }
  return (
    <>
      {isEditVisible && <Edit visible={isEditVisible} onClose={hideEdit} _Id={props.note._id} title={props.note.title} description={props.note.description} tag={props.note.tag} color={color} />}
      <div  className='noteitem-con'>
        <div id="card" className='details' style={{ backgroundImage: color.includes('linear-gradient') ? color : `none`, backgroundColor: color.includes('linear-gradient') ? 'transparent' : color  }}>
          <div className='title'>
            <h2 >{props.note.title} </h2>
            <div id='colors' className="cchange"  >
              <span className='colorbutton' style={{backgroundImage: color.includes('linear-gradient') ? color : 'none',backgroundColor: color.includes('linear-gradient') ? 'transparent' : color,}}></span>
              <div className='color'>
                <span onClick={()=>changecolor('linear-gradient(45deg, #a100ff, #303481)')} style={{backgroundImage: "linear-gradient(45deg,  #a100ff, #303481)"}}></span>
                <span onClick={()=>changecolor('linear-gradient(45deg, #C4E759, #6DE195)')} style={{backgroundImage: "linear-gradient(45deg, #C4E759, #6DE195)"}}></span>
                <span onClick={()=>changecolor('linear-gradient(45deg, #8DEBFF, #6CACFF)')} style={{backgroundImage: "linear-gradient(45deg, #8DEBFF, #6CACFF)"}}></span>
                <span onClick={()=>changecolor('linear-gradient(45deg, #F8C390, #D279EE)')} style={{backgroundImage: "linear-gradient(45deg, #F8C390, #D279EE)"}}></span>
                <span onClick={()=>changecolor('linear-gradient(45deg, #FDEB82, #F78FAD)')} style={{backgroundImage: "linear-gradient(45deg, #FDEB82, #F78FAD)"}}></span>
                <span onClick={()=>changecolor('linear-gradient(45deg, #7c9885, #b5b682)')}  style={{backgroundImage: "linear-gradient(45deg, #7c9885, #b5b682)"}}></span>
              </div>
            </div>
          </div>
          <p>{props.note.description}</p>
          <p>{(props.note.date).slice(0,10)}</p>
          <div >
            <i className="fa-solid fa-trash-can pointer" onClick={() => deletenote(props.note._id, props.note.title)}></i>
            <i className="fa-regular fa-pen-to-square pointer" onClick={update}></i>
            <span>{props.note.tag}</span>
          </div>
        </div>
      </div>
    </>
  )
}