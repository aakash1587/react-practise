import React from 'react';

function App(){
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