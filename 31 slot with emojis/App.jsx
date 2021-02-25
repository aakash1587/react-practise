import React from "react";
import Sloat from "./Sloat";
const App =()=>{
return (
  <>
  <h1 className="heading"> &#128512;  Welcome to <span style={{fontWeight:"bold"}}>sloat machine game &#128512;</span></h1>
<div className="sloatmachine">
<Sloat x="😄" y="😲" z="😏"/>
<Sloat x="😄"y="😄" z="😄"/>
<Sloat x="😲"  y="😭" z="😭"/>
<Sloat x="🧑‍🏭 "y="👯‍♀️" z="😑"/>
</div>
</>
);
};
export default App;