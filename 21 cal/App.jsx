
import React from "react";
import add, { div, mul, sub } from './Cal';
function App()
{
return(
<>
<ol>
  <li>{add(50,5)}</li>
  <li>{sub(50,5)}</li>
  <li>{mul(50,5)}</li>
  <li>{div(40,3)}</li>
</ol>

</>
);
}
export default App;
/*upto 20 video //import React from 'react';
const name="aakash mittal";
const cast="general";
let named="shivam";
let names="kjhkshivam";
function myname(a,b){
  return (named,
    <h1>{a+b}</h1>);
}
function mynames(){
  return (names);
}
export default name;
export {cast,myname,mynames};
/*upto project 19--- function App(){
let currdate=new Date(2021, 5 , 5 ,12);
currdate=currdate.getHours();
let gretting="";
const cssStyle= { };
if(currdate>=1 && currdate<12 ){
  gretting="GoodMornig";
  cssStyle.color="green";
}
else if(currdate>=12 && currdate<19 )
{
  gretting="GoodAfterNoon";
  cssStyle.color="yellow";
}
else{
  gretting="goodnight";
  cssStyle.color="black";
}
return (
  <>
<div className="cont">

  <h1>hello sir , <span style={cssStyle}>{gretting}</span> </h1>,
  </div>
  </>
);
}
export default App;
/*import Heading from "./Heading";
import List from './List';
import Paragraph from './Paragrap';
function App(){
    return (
<>
  <Heading/>
  <Paragraph />
    <List />
  <Heading/>
  <List />

    </>
    );
}
export default App;*/