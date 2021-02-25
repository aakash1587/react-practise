import React, { useState } from "react";
const state=useState;
const App=()=>{
  const [fullname,setFullname]=useState()
  const onsubmit=()=>{
    setFullname(name);
  }
  const [name,setname]=useState("aakash  ");
  const inputevent=(event)=>{
   setname(event.target.value);
    
  }
  return(
  <>
  <div className="back ">
<h1>HELLO💇{fullname}</h1>
<input type="text"
 placeholder="enter your name"
  value={name}
  onChange={inputevent}
  />
<button onClick={onsubmit}>clickme😄</button>
</div>
</>
);
};
/*const App=()=>{
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