import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function Body(props) {

    const deleteNote = ((id) => {
        fetch("http://localhost:8080/server/"+id, {
            method: "DELETE"
        }).then(()=>{

        }).catch((err)=>{
            console.log(err.message)
        })
    })

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => { deleteNote(props.id) }}>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </button>
        </div>
    );
}

export default Body;