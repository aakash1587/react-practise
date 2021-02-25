import React, { useEffect, useState } from  "react";
import axios from "axios";
const Coma=()=>{
    const [num,setnum]=useState(0);
    const [name,setname]=useState();
    const [moves,setmoves]=useState();
    useEffect(()=>{
       // alert("df");
       async function getData(){
           const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
           console.log(res);
           setname(res.data.name);
           setmoves(res.data.moves.length);
       }
       getData(); 
    })
    return (
        <>
        <h1>you choose  {num}</h1>
        <h1>my name is {name}</h1>
        <h1>my moves {moves}</h1>
        {/* <select value={num} onChange={(event)=>{
setnum(event.target.value);
        }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select> */}
            <button  onClick={(event)=>{
setnum(event.target.value);
setnum(num+1);
        }}>click me  {num}</button>
            </>
    )

}
export default Coma;