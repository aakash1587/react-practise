import React, { useEffect, useState } from "react";
const App =()=>{
  const [state,setstate]=useState(0);
  const [states,setstates]=useState(0);
  /*useEffect(()=>{
    alert("i am clicked");
  })*/
  // for the first time
  /*
  useEffect(()=>{
    alert("i am clicked");
  },[])
  */
  // it give alert for 1st
  useEffect(()=>{
    document.title=`you clicked me ${states}`;
    //alert("i am clicked");
  });
  const incre=(event)=>{
    setstate(state+1);
  }
  const incres=(event)=>{
    setstates(states+1);
  }
  return (
    <>
    <button onClick={incre}>click me  {state}</button>
    <button onClick={incres}>click me  {states}</button>
</>
  )
}
export default App;