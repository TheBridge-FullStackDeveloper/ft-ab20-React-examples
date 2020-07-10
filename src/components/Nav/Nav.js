import React, { Component } from 'react';
//import './Nav.css'

import { Link } from "react-router-dom"

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Hacer pedido</Link>
        |
        <Link to="/settings">Mi cuenta</Link>
      </nav>
    )
  }
}

export default Nav