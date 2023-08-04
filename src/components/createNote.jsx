import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from "@mui/material";

function CreateNote(props) {

    const [isExpanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    const handleClick = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8080/server', {
            method: "POST",
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // props.onAdd(note);
        // setNote({
        //     title: "",
        //     content: ""
        // });
        const data = await response.json();
        console.log(data);
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <form className="create-note">
            {isExpanded && (
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title" />)}
            <textarea
                name="content"
                onClick={expand}
                onChange={handleChange}
                value={note.content}
                placeholder="Write a note here"
                rows={isExpanded ? 3 : 1}
            />
            <Zoom in={isExpanded}>
                <Fab onClick={handleClick}><AddIcon /></Fab>
            </Zoom>
        </form>
    );
}

export default CreateNote;