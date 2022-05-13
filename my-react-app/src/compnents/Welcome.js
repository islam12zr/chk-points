import React from 'react'

const compoenent = props => {
  const color = {color:"red" ,textAlign:"right" }
  const compoenent = ({title}) => <h1>{title}</h1>;
  // whatever is passed between the tags of the component call can be accessed via this syntax
  return <h1 style={color}>lol {props.children}</h1>;
 };

export default compoenent
