import React, { useState } from "react";
const state=useState;
const App=()=>{
  const [fullname,setfullName]=useState({
fname:"",
lname:"",
lemail:"",
lnumber:"",

  });

  const onsubmit=(event)=>{
    event.preventDefault();
    setfullName(fullname.fname);
    setfullName(fullname.lname);
    setfullName(fullname.lemail);
    setfullName(fullname.lnumber);
  };
  
  const inputevent=(event)=>{
    // const value=event.target.value;
    // const name=event.target.name;
    const {name,value}=event.target;
    setfullName((preValue)=>{
      return{
        ...preValue,
        [name]:value,
      }
// if(name==="fname")
// {
//   return{
//   fname:value,
// lname:preValue.lname,
// }
// }else if(name==="lname")
// {
//   return{
//   lname:value,
// fname:preValue.fname,
//   }
// }
// else if(name==="lemail")
// {
//   return{
//   lname:preValue.lname,
//     lemail:value,

//   }
// }


    });
   }
  return(
  <>
  <form onSubmit={onsubmit}>
  <div className="back">
<h1>HELLO💇{fullname.fname}</h1>
<h1>lastname ❄️{fullname.lname}</h1>
<h1>{fullname.lemail}</h1>
<p>{fullname.lnumber}</p>
<input type="text"
 placeholder="enter your name"
  value={fullname.fname}
  name="fname"
  onChange={inputevent}
  />
  <input type="text"
 placeholder="enter your lastname"
  value={fullname.lname}
  name="lname"
  onChange={inputevent}
  />
  <input type="email"
 placeholder="enter your email"
  value={fullname.lemail}
  name="lemail"
  onChange={inputevent}
  />
  <input type="number"
 placeholder="enter your number"
  value={fullname.lnumber}
  name="lnumber"
  onChange={inputevent}
  />
<button type="submit" >clickme😄</button>
</div>
</form>
</>
);
};
/* upto 36 lec  const App=()=>{
  let purple;
  let names;
const state=useState;
const [bg,setbg]=useState(purple);
const [name,setname]=useState(names);
  const bgchane=()=>
  { let newbg="green";
setbg(newbg);
names="aakash mittal 😲";
setname(names);

  }
  const newbgchane=()=>
  { let newbg="yellow";
setbg(newbg);
names="far crt 3 🐺";
setname(names);

  }
return (
  <>
  <div style={{backgroundColor:bg}} className="back">
    <h1>{name}</h1> 
    <button onClick={bgchane} onDoubleClick={newbgchane}>click/double click</button>
  </div>
  </>
)
}*/
export default App;