import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Welcome to",
      image: "img/logo.png",
      url: "/"
    }
  }

  render() {
    return (
      <header>
        <div>
          <a href={this.state.url}>
            <img src={this.state.image} alt={this.props.brand} />
          </a>
        </div>
        
        <h1>{ `${this.state.message} ${this.props.brand}` }</h1>
      </header>
    )
  }
}

export default Header