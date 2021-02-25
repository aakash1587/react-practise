
import React, { useState } from "react";
import Listform from "./Listform";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
const Todolist=()=>{
const [item,setitem]=useState("buyapple"); 
const [newitem,setnewitem]=useState([]);

const itemevent=(event)=>{
    setitem(event.target.value);

};
const listofitem=(event)=>{
    setnewitem((pre)=>{
return [...pre,item];
    });
    //setitem("");
}
    return (
        <>
         <div className="maindiv">
            <div className="centerdiv">
                 <br/>
  <h1 className="heading">Todo List</h1>
  <br/>
  <input type="text"  value={item}placeholder="add items" onChange={itemevent} />
  <Button onClick={listofitem}><AddCircleIcon/></Button>
  <br/>
  <ol>
      
     { newitem.map((val,index)=>{
          return <Listform Key={index}text={val}/>;
      })}
  </ol>
                
            </div>
        </div>
        </>
    )
};
/*import React, { useState } from "react";
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