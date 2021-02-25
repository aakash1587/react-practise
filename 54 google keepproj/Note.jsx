import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
const Note=(props)=>{
    const deletenote=()=>{
        props.deleteitem(props.id);
    }
    return (
        <>
        <div className="note">
<h1>{props.title}</h1>
        <br/>
        <p> {props.content}</p>
       <Button onClick={deletenote}> <DeleteIcon className="deleteicon"/></Button> 
        </div>
        </>
    )
}
export default Note;