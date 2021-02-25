import React, { useState } from "react";
import AppleIcon from '@material-ui/icons/Apple';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
const Todolist=()=>{
    const [num,setnum]=useState(0);
    const increment=()=>{
        setnum(num+1);
    }
    const decrement=()=>{
        if(num!=0){
        setnum(num-1);
        }
        else
        {setnum(0);
    alert("num canot be negative");
        }
    }
    return(
        <>
        <div className="maindiv">
            <div className="centerdiv">
                <h1 className="heading">{num}<AppleIcon/></h1>
                <div className="btndiv">
                    <Button onClick={increment}> <AddBoxIcon/></Button>
                    <Button onClick={decrement}><DeleteIcon/></Button>
    
                </div>
            </div>
        </div>
        </>
    );
}
/*const Todolist=(props)=>{
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
}*/
export default Todolist;