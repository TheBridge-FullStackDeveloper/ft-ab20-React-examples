import React, { Component } from 'react'
import './Item.css'

import { Link } from "react-router-dom"

class Item extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Link to={`/itemDetail/${this.props.data.id}`}>
        <article className="Item">
          <img src={this.props.data.img} alt={this.props.data.title} />
          <h2>{this.props.data.title}</h2>
        </article>
      </Link>
    )
  }
}

export default Item