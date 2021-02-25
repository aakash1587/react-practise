import React from "react";
import { Firstname, Last } from "./App";
const Componentc=()=>{
    const time=new Date().toLocaleTimeString();
    return (
        <>
        <Firstname.Consumer>{(fname)=>{
            return(
                <>
                <Last.Consumer>{(lname)=>{
                    return(
<h1>my name is {fname} {lname} {time}</h1>
                    )

                }}
                
                </Last.Consumer>
                </>
                
            )

        }}</Firstname.Consumer>
        
</>
    )
}
export default Componentc;
