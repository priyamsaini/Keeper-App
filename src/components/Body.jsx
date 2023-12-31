import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function Body(props){

    function handleClick(){
        props.onDelete(props.id);
    }
    return (
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
        <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
        </button>
    </div>
    );
}

export default Body;