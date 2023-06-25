import React, { useState } from "react";
import Header from './Header';
import Body from "./Body";
import Footer from "./Footer";
import CreateNote from "./createNote";

function App(){

    const [notes,setNotes] = useState([]);
    const arrayLength = notes.length;

    function addNote(note){
        setNotes(prevNotes => {
        return [...prevNotes, note];
        });
    }
    function deleteNode(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem,index) =>{
                return index !== id;
            });
        });
    }

    return ( 
        <div>
        <Header/>
        <CreateNote
            onAdd={addNote}
        />
        {arrayLength <= 0 ? <h3>No notes taken yet,try adding a note to show.</h3> : 
        notes.map((noteItem, index )=> {
            return ( 
            <Body
            key = {index}
            id = {index}
            title = {noteItem.title}
            content = {noteItem.content}
            onDelete = {deleteNode}
            />);
        })}
        <Footer/>
        </div>
    );
}

export default App;