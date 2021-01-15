import React from 'react'
// import {Route, Switch} from 'react-router-dom'

import Navbar from './component/navbar'
import Inventory from './component/Inventorydetail'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Inventory/>
      </div>
    );
  }
  
}

export default App;
