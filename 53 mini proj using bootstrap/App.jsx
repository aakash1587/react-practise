import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App=()=>{
  return (
  <><h1 className=" text-capitalize text-center">welcome to my world</h1>
<div className="container">
  <div className="row">
    <div className="col-sm">
      <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
</>)
;
}
/*import Todolist from "./Todolist";
const App =()=>
{
  const [inlist,setlist]=useState("aakash");
  const itemevents=(event)=>{
    setlist(event.target.value);
  }
  const [items,setitems]=useState([]);
  const listitem=()=>{
setitems((oldItems)=>{
  return [...oldItems,inlist];
});
setlist(""); 
  }
  const deleteitem=(id)=>{
    console.log("delete");
    setitems((oldItems)=>{
      return oldItems.filter((arrelm,index)=>{
        return index!==id;

      })
    })
  }
return(
<>
<div className="maindiv"> 
<div className="centerdiv">
  <br/>
  <h1 className="heading">Todo List</h1>
  <br/>
  <input type="text" placeholder="add items" value={inlist} onChange={itemevents} />
  <button onClick={listitem}>+</button>
  <ol>
   {/* <li>{inlist}</li>*///}
  /*{ items.map((itemval,index) => {
    // return <li>{itemval}</li>
   return <Todolist key={index} 
   id={index}
   text={itemval}
   onSelect={deleteitem} />
   })}
  </ol> 
  </div>
</div>
</>
);
};




/*import React, { useState } from "react";
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