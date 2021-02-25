import React from "react";
const Sloat=(props)=>{

    // let x="**";
    // let y="**";
    // // let z="**/";
    //or
    // let x=props.x;
    // let y=props.y;
    // let z=props.z;
    //or
    let {x,y,z}=props;
    if((x===y) && (y===z)){
      return(
        <>
        <div className="sloatinner">
          
          <h1>{x} {y} {z}</h1>
          <h1> this is matching</h1>
          <hr />
  
        </div>
        </>
      )
    }
    else{
        return(
          <>
          <div className="sloatinner">
            
            <h1>{x} {y} {z}</h1>
            <h1>this is not matching</h1>
            <hr />
    
          </div>
          </>
      );
    }
  
  };
  export default Sloat;