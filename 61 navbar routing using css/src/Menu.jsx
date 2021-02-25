import React from "react";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
const Menu=()=>{
 return(
   <>
    <h1>REact Navlink</h1>
   <br/>
   <NavLink  exact activeClassName="active_class" to="/">Aboutus</NavLink>
   <NavLink exact activeClassName="active_class" to="/contact">contactus</NavLink>
   <br/>
   <h1>REact simple link</h1>
   <br/>
   <Link to="/">Aboutus</Link>
   <Link to="/contact">contactus</Link>
   <br/>
   <h1>simple method</h1>
   <br/>
   <a href="/" >Aboutus</a>
   <a href="/contact" >contactus</a>
   <h1>Menu ⬇️</h1>
   </>
 ) 
}
export default Menu;