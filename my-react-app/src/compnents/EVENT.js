import React from "react";
import ActionCompoenent from "./ActionCompoenent";


const EVENT = () => {
    const handleClick = e => {
      e.preventDefault();
      alert("this is the click ")
    };
  
   

    return <ActionCompoenent handleClick={handleClick}/>
   };
   export default  EVENT