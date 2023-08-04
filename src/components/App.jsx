import React, { useState, useEffect } from "react";
import Header from './Header';
import Body from "./Body";
import Footer from "./Footer";
import CreateNote from "./createNote";

function App() {

    const [notes, setNotes] = useState([]);
    // const arrayLength = notes.length;

    const getNotes = async (props) => {
        const response = await fetch('http://localhost:8080/server', {
            method: "GET",
        })
        const data = await response.json();
        // props.onAdd(data);
        setNotes(data);
    }

    useEffect(() => {
        getNotes();
    }, [])

    

    // function addNote(note){
    //     setNotes(prevNotes => {
    //     return [...prevNotes, note];
    //     });
    // }

    return (
        <div>
            <Header />
            <CreateNote
            // onAdd={getNotes}
            />
            {/* {arrayLength <= 0 ? <h3>No notes taken yet,try adding a note to show.</h3> :  */}
            {notes.map((note) => {
                return (
                    <Body
                        key={note._id}
                        id={note._id}
                        title={note.title}
                        content={note.content}
                    />);
            })}
            <Footer />
        </div>
    );
}

export default App;