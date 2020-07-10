import React, { Component } from 'react'
import './Profile.css'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      validated: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("yeah");
  }

  handleFirstnameChange(e) {
    if (e.target.value.length > 10) {
      this.setState({...this.state, validated: true})
    }
    else {
      this.setState({...this.state, validated: false})
    }
  }

  componentDidMount() {
    this.setState({...this.state, validated: true})
  }

  render() {
    return (
      <div>
        <form action="/thanks" onSubmit={this.handleSubmit}>
          <div>Nombre: <input type="text" id="firstname" name="firstname" onChange={this.handleFirstnameChange} /></div>
          <div>{this.state.validated ? "" : this.state.validationMessages[].firstname}</div>
          
          <div><input type="submit" value={this.state} /></div>
        </form>
      </div>
    )
  }
}

export default Profile