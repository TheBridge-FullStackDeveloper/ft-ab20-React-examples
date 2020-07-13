import React, { Component } from 'react'
import './Footer.css'

import { LanguageConsumer } from './../../contexts/LanguageContext'

class Footer extends Component {
  render() {
    return (
      <footer>
        {/* <LanguageConsumer>
          {(context) => {
            if(context.currentLanguage === "es")
              return <button onClick={() => {context.handleLanguage("en")}}>Español</button>
            else
              return <button onClick={() => {context.handleLanguage("es")}}>English</button>
          }}
        </LanguageConsumer> */}
        <LanguageConsumer>
          {(context) =>
            <div>
              <button onClick={() => {context.handleLanguage("es")}}>Español</button>
              <button onClick={() => {context.handleLanguage("en")}}>English</button>
            </div>
          }
        </LanguageConsumer>
        <small>&copy; Copyright</small>
      </footer>
    )
  }
}

export default Footer