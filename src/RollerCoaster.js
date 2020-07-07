import React from 'react';
import logo from './logo.svg';
import './RollerCoaster.css';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import globals from './globals'
import Header from './component/Header'
import Footer from './component/Footer'
import ItemList from './component/ItemList/ItemList'
import ItemDetail from './component/ItemDetail/ItemDetail'
import Profile from './component/Profile/Profile'

function RollerCoaster() {
  return (
    <div className="App">
      <Header brand={ globals.brand } />
      
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Pedido</Link></li>
            <li><Link to="/settings">Opciones</Link></li>
          </ul>
        </nav>
      
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route path="/itemDetail/:id" component={ItemDetail} />
          <Route path="/settings" component={Profile} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default RollerCoaster;
