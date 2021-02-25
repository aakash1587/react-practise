import React, { useState } from "react";
const state=useState;
const App=()=>{
  const [fullname,setFullname]=useState()
  const onsubmit=(event)=>{
    event.preventDefault();
    setFullname(name);
    setpassword(password);
  }
  const [password,setpassword]=useState("");
  
  const inputeventtwo=(event)=>{
    setpassword(event.target.value);
     
   }
   let check;
   if(password==="1234")
   {
     check="true";
   }
   else
   {
     check="false";
   }
  const [name,setname]=useState("");
  const inputevent=(event)=>{
   setname(event.target.value);
    
  }
  return(
  <>
  <form onSubmit={onsubmit}>
  <div className="back">
<h1>HELLO💇{fullname}</h1>
<h1>password {check}</h1>
<input type="text"
 placeholder="enter your name"
  value={name}
  onChange={inputevent}
  />
  <input type="password"
 placeholder="enter your name"
  value={password}
  onChange={inputeventtwo}
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