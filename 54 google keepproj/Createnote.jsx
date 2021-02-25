import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const Createnote=(props)=>{
    const [note,setnote]=useState({
        title:"",
        content:"",
    });
    const inputevent=(event)=>{
       // const value=event.target.value;
        //const name=event.target.name;
        const {name,value}=event.target;
        setnote((prevdata)=>{
            return{  
                ...prevdata,
                [name] : value,
        }
        })
    }
    const notedata=(event)=>{
        props.passnote(note);
    }
    return (
    <>
    <div className="maindiv">
        <form className="centerdiv">
            <input
             type="text" 
             name="title"
            value={note.title} 
            onChange={inputevent} 
            placeholder="title" 
            autoComplete="off"/>
            <br/>
            <textarea 
            rows="20" 
            cols="20"
            name="content"
             value={note.content} 
             onChange={inputevent} 
             placeholder="write a note"
             ></textarea>
            <br/>
            <Button onClick={notedata}><AddIcon/></Button>
        </form>
    </div>
    </>
    )
}
export default Createnote;