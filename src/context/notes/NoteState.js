
import { useContext, useState } from "react";
import NoteContext from "./noteContext";
import AlertContext from "../alerts/alertContext";


export default function NoteState(props) {
  const showalert=useContext(AlertContext)
  const {showalerts}=showalert
  const intialnotes = []
  const [notes, setNotes] = useState(intialnotes)
  

  //fetch all notes from the server
  const fetchnote = async () => {
    const response = await fetch("http://localhost:5000/api/notes/fetchnotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    });
    const data=await response.json();
    setNotes(data)
    // showalerts("success","all notes")
  }


  //Add new note in database
  const addnote = async (title, description, tag) => {
    console.log(title, description, tag)
    const response = await fetch("http://localhost:5000/api/notes/AddNotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    showalerts("success","Note is added successfully")
    const data=await response.json();
    // console.log(data)

    // console.log("adding new note")
    setNotes(notes.concat(data))
  }


  //Delete note for user
  const deletenote =async (id,name) => {
    const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({id}),
    });
    showalerts("danger",`Note ${name} delete successfully`)
    const data=await response.json();
    console.log(data)
    const delnote = notes.filter((note) => { return note._id !== id })
    setNotes(delnote);
  }


  //Edit note 
  const editnote = async (_id, title, description, tag,color) => {

    const response = await fetch(`http://localhost:5000/api/notes/updatenote/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({_id, title, description, tag, color }),
    });

    console.log(response.json())

    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === _id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        element.color = color;
        break;
      }
    }
    showalerts("warning",`Note is changed!`)
  }

  return (
    <NoteContext.Provider value={{ notes, fetchnote, addnote, deletenote, editnote }}>
      {props.children}
    </NoteContext.Provider>

  )
}