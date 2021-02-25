import React, { useState } from "react";
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
                <h1 className="heading">{num}</h1>
                <div className="btndiv">
                    <button onClick={increment}> increment</button>
                    <button onClick={decrement}>decrement</button>
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