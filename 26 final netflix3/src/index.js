import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import  "./index.css";
/*function ncard(value,index,array)
{
  return(
    <Card imgsrc={value.imgsrc} 
 title={value.title}
 sname={value.sname}
 link={value.link}
 /> 
  )

}*/
ReactDOM.render(
 <>
 <h1 className="heading">List Of Top 5 netflix apps web series</h1>
{Sdata.map((value,index)=>{
  return(
    <Card imgsrc={value.imgsrc} 
 title={value.title}
 sname={value.sname}
 link={value.link}
 /> 
  )
})};
</>,
  document.getElementById("root")
);