import React from 'react'

const EventClick = ({handclick})=>{


    const handleClick = e => {
        e.preventDefault();
        alert("this is the click ")
      };
  return (


        <a style={{color:"Red"}} href="#" onClick={e=>handclick(e)}>


            click here 
        </a>
  
  )
}

export default EventClick