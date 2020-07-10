import React, { Component } from 'react'
import './Item.css'

import { Link } from "react-router-dom"

class Item extends Component {
  constructor(props){
    super(props)

    this.state = this.props
    console.log("BUenos días")
  }

  componentDidMount() {
    console.log("Buen finde")
  }

  render() {
    return (
      <Link to={`/itemDetail/${this.props.id}`}>
        <article className="Item">
          <img src={this.props.img} alt={this.props.title} />
          <h2>{this.props.title}</h2>
        </article>
      </Link>
    )
  }
}

export default Item