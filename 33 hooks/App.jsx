import React, { useState } from "react";


const App=()=>{
  const state=useState;
  const [count,setCount]=useState(0);
const inc=()=>{

 setCount(count-1);
  
};
return(
  <>
  <div className="heading">
  <h1>{count}</h1>
  <button onClick={inc}>click me</button>
  </div>
  </>

)
}
export default App;