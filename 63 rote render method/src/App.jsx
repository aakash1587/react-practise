import React from "react";
import {Route,Switch} from "react-router-dom"; 
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import Service from "./Service";
import User from "./User";
const App=()=>{
 return(
   <>
   <Menu/>
   <div className="centerdiv">
   <Switch>
     <Route exact path="/" render={()=>
       <About name="about"/>
     }/>
     <Route exact path="/contact" component={Contact}/>
     <Route exact path="/service" component={Service}/>
     <Route exact path="/user" component={User}/>
     <Route exact component={Error}/>
   </Switch>
   </div>
  {/* <About/>
   <Contact/>
  */}
  </>
 ) 
} 
export default App;