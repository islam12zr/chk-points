import React from "react";
import ActionCompoenent from "./ActionCompoenent";


const ActionLink = () => {
    const handleClick = e => {
      e.preventDefault();
      alert("this is the click ")
    };
  
    return (
   
     
      <a href="/" onClick={handleClick}>
        Click me
      </a>
    );

    
   };
   export default  ActionLink