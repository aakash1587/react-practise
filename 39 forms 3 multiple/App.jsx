import React, { useState } from "react";
const state=useState;
const App=()=>{
  const [fullname,setfullName]=useState({
fname:"",
lname:"",

  });

  const onsubmit=(event)=>{
    event.preventDefault();
    setfullName(fullname.fname);
    setfullName(fullname.lname);
  };
  
  const inputevent=(event)=>{
    const value=event.target.value;
    const name=event.target.name;
    setfullName((preValue)=>{
if(name==="fname")
{
  return{
  fname:value,
lname:preValue.lname,
}
}else if(name==="lname")
{
  return{
  lname:value,
fname:preValue.fname,
  }
}
    });
   }
  return(
  <>
  <form onSubmit={onsubmit}>
  <div className="back">
<h1>HELLO💇{fullname.fname}</h1>
<h1>lastname{fullname.lname}</h1>
<input type="text"
 placeholder="enter your name"
  value={fullname.fname}
  name="fname"
  onChange={inputevent}
  />
  <input type="text"
 placeholder="enter your name"
  value={fullname.lname}
  name="lname"
  onChange={inputevent}
  />
<button type="submit" >clickme😄</button>
</div>
</form>
</>
);
};
/* upto 36 lec  const App=()=>{
  let purple;
  let names;
const state=useState;
const [bg,setbg]=useState(purple);
const [name,setname]=useState(names);
  const bgchane=()=>
  { let newbg="green";
setbg(newbg);
names="aakash mittal 😲";
setname(names);

  }
  const newbgchane=()=>
  { let newbg="yellow";
setbg(newbg);
names="far crt 3 🐺";
setname(names);

  }
return (
  <>
  <div style={{backgroundColor:bg}} className="back">
    <h1>{name}</h1> 
    <button onClick={bgchane} onDoubleClick={newbgchane}>click/double click</button>
  </div>
  </>
)
}*/
export default App;