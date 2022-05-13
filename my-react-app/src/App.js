import React from 'react';
import ReactHeader from './compnents/DefaultProps';
import advanced from './compnents/Welcome';
import Welcome from './compnents/Welcome'
import PropTypes from "prop-types";
import SimpleComponent from './compnents/SimpleComponent';
import ActionLink from './compnents/EventReact';
import ActionCompoenent from './compnents/ActionCompoenent';
import EventClick from './compnents/EventClick';
import EVENT from './compnents/EVENT';



function App() {

  return (
    <div>App
      <EventClick/>
<SimpleComponent/>
<ActionLink/>
<ActionCompoenent/>
<EVENT/>



    </div>
  )
}

export default App
