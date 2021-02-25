import React, { createContext } from "react";
import Componenta from "./Componenta";

const Firstname=createContext();
const Last=createContext();
const App=()=>{
  
  return(
    <>
    <Firstname.Provider value={"aakash"}><Last.Provider value={"mittal boss"}><Componenta/></Last.Provider></Firstname.Provider > 
</>  );
}
export default App;
export {Firstname,Last};