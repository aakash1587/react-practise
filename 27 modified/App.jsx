import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import  "./index.css";
function App(){
    return(
 <>
 <h1 className="heading">List Of Top 5 netflix apps web series</h1>
{Sdata.map((value,index)=>{
  return(
    <Card 
    key={value.id}
    imgsrc={value.imgsrc} 
 title={value.title}
 sname={value.sname}
 link={value.link}
 /> 
  )
}
)
};
</>
)
}
export default App;