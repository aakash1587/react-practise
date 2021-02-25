import React from "react";
const Todolist=(props)=>{
    return (
        <>
        <div className="todo">
<li><button
 className="buttonstyle"
  onClick={()=>{
    props.onSelect(props.id);
  }}
  >x</button>{props.text}</li>
    </div>
</>
    )
}
export default Todolist;