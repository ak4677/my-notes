
import { useState } from "react";
import NoteContext from "./noteContext";


export default function NoteState(props) {
    const intialnotes=[
        {
          "_id": "678bdf15a7e109df162c92b8",
          "title": "first note",
          "description": "this is the note adding work",
          "tag": "school",
          "date": "2025-01-18T17:04:21.421Z",
          "__v": 0
        },
        {
          "_id": "678bdf22a7e109df162c92bb",
          "title": "second note",
          "description": "this is the note adding work",
          "tag": "school",
          "date": "2025-01-18T17:04:34.193Z",
          "__v": 0
        },
        {
            "_id": "678bdf15a7e109df162c9b8",
            "title": "first note",
            "description": "this is the note adding work",
            "tag": "school",
            "date": "2025-01-18T17:04:21.421Z",
            "__v": 0
          },
          {
            "_id": "678bdf22a7e109df162c9bb",
            "title": "second note",
            "description": "this is the note adding work",
            "tag": "school",
            "date": "2025-01-18T17:04:34.193Z",
            "__v": 0
          },
          {
            "_id": "678bdf15a7e10df162c92b8",
            "title": "first note",
            "description": "this is the note adding work",
            "tag": "school",
            "date": "2025-01-18T17:04:21.421Z",
            "__v": 0
          },
          {
            "_id": "678bdf22a7e09df162c92bb",
            "title": "second note",
            "description": "this is the note adding work",
            "tag": "school",
            "date": "2025-01-18T17:04:34.193Z",
            "__v": 0
          }
      ]
      const [notes,setNotes]=useState(intialnotes)

      const fetchnote=()=>{

      }

      const addnote=(title,description,tag)=>{
        console.log("adding new note")
        const note={
          "_id": "678bdf22a7e09df162c92bb",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2025-01-18T17:04:34.193Z",
          "__v": 0
        }
        setNotes(notes.concat(note))
      }

      const deletenote=()=>{
        
      }

      const editnote=()=>{
        
      }
    return (
            <NoteContext.Provider value={{notes,fetchnote,addnote,deletenote,editnote}}>
                {props.children}
            </NoteContext.Provider>

    )
}