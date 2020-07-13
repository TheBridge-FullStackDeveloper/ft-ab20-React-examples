import React, { Component } from 'react'
import './Profile.css'

import LanguageContext, { LanguageConsumer } from './../../contexts/LanguageContext'

class Profile extends Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props)

    this.state = {
      validated: {
        firstname: false,
        surname: false
      },
      submitMessage: "",
      validationMessages: {},
      names: {},
      currentLanguage: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this)
  }

  componentDidMount() {
    const submitMessage = {
      es: "Guardar",
      en: "Save",
      de: "Savestrufen"
    }

    const names = {
      es: "Nombre",
      en: "Name",
      de: "SavesNamigsrefserftrufen"
    }

    const validationMessages = {
      es: {
        firstname: "Por favor, introduce tu nombre",
        surname: "Por favor, introduce tus apellidos"
      },
      en: {
        firstname: "Please, type your first name",
        surname: "Please, type your surname"
      },
      de: {
        firstname: "asdas d sad as dasd",
        surname: "asd asd asd asd "
      }
    }

    this.setState({
      ...this.state,
      submitMessage,
      validationMessages,
      names,
      currentLanguage: this.context.currentLanguage
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    // Si todos los validated de todos los campos estan a true...
      console.log("yeah");
  }

  handleFirstnameChange(e) {
    if (e.target.value.length > 10) {
      this.setState({...this.state, validated: { firstname: true } })
    }
    else {
      this.setState({ ...this.state, validated: { firstname: false } })
    }
  }

  getValidationMessage(lang, field) {
    if (this.state.validationMessages[lang] !== undefined &&
      this.state.validationMessages[lang][field] !== undefined) {
      return this.state.validationMessages[lang][field]
    }

    return ""
  }

  render() {
    return (
      <div>
        <form action="/thanks" onSubmit={this.handleSubmit}>
          <div className={this.state.validated.firstname ? "" : "error-field"}>

          {/* ------- Firstname ------- */}
          {this.state.names[this.state.currentLanguage]}
          <input type="text" id="firstname" name="firstname" onChange={this.handleFirstnameChange} /></div>
          {/* ------- /Firstname ------- */}
          
          <LanguageConsumer>
            {(context) =>
              <div>
                {this.state.validated.firstname ? "" : this.getValidationMessage(context.currentLanguage, "firstname")}
              </div>
            }
          </LanguageConsumer>

          <div><input type="submit" value={this.state.submitMessage[this.state.currentLanguage]} /></div>
        </form>
      </div>
    )
  }
}

export default Profile