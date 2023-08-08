import React, { useEffect, useState } from "react";
import Header from './Header';
import Body from "./Body";
import Footer from "./Footer";
import CreateNote from "./createNote";
import axios from "axios";

function App(){

    const [notes,setNotes] = useState([]);
    // const arrayLength = notes.length;

    useEffect(()=>{
        const fetchAllNotes = async () => {
            try{
                const res = await axios.get("http://localhost:3030/note")
                setNotes(res.data)
            }
            catch (err){
                console.log(err);
            }
        };
        fetchAllNotes();
    },[])

    // function addNote(note){
    //     setNotes(prevNotes => {
    //     return [...prevNotes, note];
    //     });
    // }
     const deleteNode = async (id) => {
        try {
            await axios.delete("http://localhost:3030/note"+id)
            window.location.reload()
        }
         catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div>
        
        <Header/>
        <CreateNote
            // onAdd={addNote}
        />
        {/* {arrayLength <= 0 ? <h3>No notes taken yet,try adding a note to show.</h3> :  */}
        {notes.map(note=> {
            return ( 
            <Body
            key = {note.id}
            id = {note.id}
            title = {note.title}
            content = {note.content}
            onDelete = {()=>{
                deleteNode(note.id)
            }}
            />);
        })}
        <Footer/>
        </div>
    );
}

export default App;