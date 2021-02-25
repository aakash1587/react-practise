import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
const User=()=>{
    //use params hooks
    const {fname}=useParams();
    //use location hooks
    const loc=useLocation();
    // useHistory hooks
    const hist=useHistory();
 return(
   <>
   <h1>i am user {fname} 😵</h1><br/>
   <h4>my current location is {loc.pathname}</h4>
   {/*for location */}
   {loc.pathname==="/user/aakash"?(
   <button onClick={()=>{alert("welcome aakash")}}>clickme</button>):null}
     {/*for history*/}
      {loc.pathname==="/user/aakash"?(
      <button onClick={()=>hist.goBack()}>goback</button>):null}
        {loc.pathname==="/user/aakash"?(
      <button onClick={()=>hist.push("/")}>home</button>):null}
   </>
 ) 
}
export default User;