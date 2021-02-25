import React, { useState } from "react";


const App=()=>{
  let nwetime=new Date().toLocaleTimeString();
  const state=useState;
  const [times,settime]=useState(nwetime);
  const time=()=>{
 nwetime=new Date().toLocaleTimeString();
settime(nwetime);
  }
  setInterval(time,1000);
  return(
    <>
    <div className="heading">
      <h1>{times}</h1>
    </div>
    </>

  );
};
/*
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
}*/
export default App;