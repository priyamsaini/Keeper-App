import React, { useState } from "react"; 
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios";

function CreateNote(props){

    // const navigate = useNavigate()

    const[isExpanded, setExpanded] = useState(false);
    const[note,setNote] = useState({
        title : "",
        content : ""
    });

    function handleChange(event){
        const{name,value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    async function handleClick(event){
        try{
            await axios.post("http://localhost:3030/note",note)
            window.location.reload(false);
            // navigate("/")
        }
        catch (err){
            console.log(err)
        }
        // props.onAdd(note);
        // setNote({
        //     title : "",
        // content : ""
        // });
        event.preventDefault();
    }
    function expand(){
        setExpanded(true);
    }

    return (
        <form className="create-note">
            { isExpanded && (
            <input 
            name="title"
            onChange={handleChange} 
            value={note.title} 
            placeholder="Title"/>)}
            <textarea 
            name="content"
            onClick={expand}
            onChange={handleChange} 
            value={note.content} 
            placeholder="Write a note here"
            rows={isExpanded ? 3 : 1}
            />
            <Zoom in={isExpanded}>
            <Fab onClick={handleClick}><AddIcon/></Fab>
            </Zoom>
        </form>
    );
}

export default CreateNote;