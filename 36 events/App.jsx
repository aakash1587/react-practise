import React, { useState } from "react";
const App=()=>{
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
}
export default App;