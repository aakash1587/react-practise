//var React=require("react");
//var Reactdom=require("react-dom");
//import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import add, { div, mul, sub } from './Cal';
ReactDOM.render(
<App/>,
document.getElementById("root")
);
/*upto lec 20 //import name,{cast, mynames ,myname} from './App';
import * as qy from "./App";
ReactDOM.render(
  <>
  <ul>
    <li>aakassh</li>
    <li>ssd</li>
    <li>{qy.default}</li>
    <li>{qy.cast}</li>
    <li>{qy.myname(20,5)}</li>
    <li>{qy.mynames()}</li>
  </ul>
  </>,
  document.getElementById("root")

);
/*

ReactDOM.render(
  <>
  <ul>
    <li>aakassh</li>
    <li>ssd</li>
    <li>{name}</li>
    <li>{cast}</li>
    <li>{myname()}</li>
    <li>{mynames()}</li>
  </ul>
  </>,
  document.getElementById("root")

);
/* upto 19 project --import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
document.getElementById("root")
);
/*import Heading from "./Heading";
//import List from './List';
//import Paragraph from './Paragrap';
ReactDOM.render(
  <App />,
document.getElementById("root")
);
/*ReactDOM.render(
  <>
  <Heading/>
  <Paragraph />
    <List />
    </>,
document.getElementById("root")
);*/
/* lec no 17 mini projectimport './index.css';
let currdate=new Date(2021, 5 , 5 ,2);
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
ReactDOM.render(<>
<div className="cont">

  <h1>hello sir , <span style={cssStyle}>{gretting}</span> </h1>,
  </div>
  </>,
  document.getElementById("root")
);
/*upto lec no. 17 import "./index.css"; 
//inline css
const heading={
  color:"red",
  backgroundColor:"blue",
  textAlign:"center"
}
const name="aakash"
const img="https://picsum.photos/200/300 "
const img1="https://picsum.photos/200/300 "
const img2="https://picsum.photos/200/300 "
const link="https://www.w3schools.com/js/js_date_formats.asp"
ReactDOM.render(
  <>
  <h1 style={heading}
  contentEditable="true">my name is {name}</h1>
  
  <div className="imga"><img src={img}alt="random images"/>
  <img src={img1}alt="random images"/> 
  <a href={link} >
  <img src={img2}alt="random images"/>
  </a>
  </div>
  </>,
  document.getElementById("root")
);
/*const name="aakash";
const currdate= new Date().toLocaleDateString();
const currtime= new Date().toLocaleTimeString();
ReactDOM.render(
  
  <>
  <h1>my name is {name}</h1>
  <p>current date :{currdate}</p>
  <p>current date :{currtime}</p>
  </>,
  document.getElementById("root")

);
/*const fname="aakash";
const lname="mittal";
ReactDOM.render(
 <>
    <h1>netflix {`${fname}${lname}`} </h1>
  <p>list of {2*3} 
  web series</p>
  <ol>
    <li>whitcher</li>
    <li>staranger sthings</li>
    <li>dark</li>
    <li>wonder
    </li>
    <li>hallo</li>
  </ol>
 </>,
  document.getElementById("root")
);

Reactdom.render(
   #__PURE__React.createElement("h1", null, "hello world xd"),
    document.getElementById("root"));
 import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
 import App from './App';
 import reportWebVitals from './reportWebVitals';

 ReactDOM.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
   document.getElementById('root')
 );

 If you want to start measuring performance in your app, pass a function
 to log results (for example: reportWebVitals(console.log))
 or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();*/
