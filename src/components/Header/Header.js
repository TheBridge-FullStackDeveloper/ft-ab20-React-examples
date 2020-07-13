import React, { Component } from 'react'
import './Header.css'

import LanguageContext from './../../contexts/LanguageContext'

class Header extends Component {
  static contextType = LanguageContext

  constructor(props) {
    super(props)

    this.state = {
      message: "Welcome to",
      image: "img/logo.png",
      url: "/",
      flags: [],
      changeLanguage: null
    }

    this.getLanguageFlags = this.getLanguageFlags.bind(this)
  }

  componentDidMount() {
    const flags = [
      {
        lang: "es",
        name: "Español"
      },
      {
        lang: "en",
        name: "English"
      }
    ]

    this.setState({ ...this.state, flags, changeLanguage: this.context.handleLanguage })
  }

  getLanguageFlags() {
    return this.state.flags.map(flag =>
      <button onClick={ () => this.state.changeLanguage(flag.lang) }>{flag.name}</button>
    )
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

        <div>
          {this.getLanguageFlags()}
        </div>
      </header>
    )
  }
}

export default Header