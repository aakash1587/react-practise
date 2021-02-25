import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
const Listform=(props)=>{
    const [line,setline]=useState(false);
    const deletelist=()=>{
        setline(true);
    }
   return( <div className="todo"> 
    <span onClick={deletelist}><DeleteIcon /> </span>
     <li style={{ textDecoration: line ?"line-through":"none"}}>{props.text}</li>;

    </div>
   )}
export default Listform;