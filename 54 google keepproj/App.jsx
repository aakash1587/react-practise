import React, { useState } from "react";
import Createnote from "./Createnote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
const App=()=>{
  const [additem,setadditem]=useState([]);
  const addnote=(note)=>{
    //alert("my name is aakash");
setadditem((prevdata)=>{
return [...prevdata,note]
});
  }
//console.log(additem); 
const onDelete=(id)=>{
  setadditem((olddata)=>
  olddata.filter((currvalue,index)=>{
    return index!==id;
  })
  );
};
  return(
    <>
    <Header/>
    <Createnote passnote={addnote}/>
    {additem.map((val,index)=>{
      return <Note
      key={index}
      id={index}
      title={val.title}
      content={val.content}
      deleteitem={onDelete}
      />
    })}
<Footer/>

    </>
  )
}
export default App;