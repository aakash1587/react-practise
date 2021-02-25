import React from "react";
import Componentc from "./Componentc";
import { Firstname, Last } from "./App";
import { useContext } from "react";
const Componentb=()=>{
    const context =useContext(Firstname)
    return (
        <h1>my name is {context}</h1>
        //<Componentc/>
    )
}
export default Componentb;