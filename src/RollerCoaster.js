import React from 'react';
import logo from './logo.svg';
import './RollerCoaster.css';

import globals from './globals'
import Header from './component/Header'
import ItemList from './component/ItemList/ItemList'

function RollerCoaster() {
  return (
    <div className="App">
      <Header brand={ globals.brand } />
      <ItemList />
      {/* <Footer /> */}
    </div>
  );
}

export default RollerCoaster;
