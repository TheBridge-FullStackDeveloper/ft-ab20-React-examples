import React from 'react';
import logo from './logo.svg';
import './RollerCoaster.css';

import globals from './globals'
import Header from './component/Header'

function RollerCoaster() {
  return (
    <div className="App">
      <Header brand={ globals.brand } />
    </div>
  );
}

export default RollerCoaster;
