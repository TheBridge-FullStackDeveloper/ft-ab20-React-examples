import React, { Component } from 'react';
import './Item.css';

import { Link } from "react-router-dom";

class Item extends Component {
  constructor(props){
    super(props);

    this.state = this.props.data;
  }

  render() {
    return (
      <Link to={ `/itemDetail/${this.state.id}` }>
        <article className="Item">
          <img src={ this.state.img } alt={ this.state.title } />
          <h2>{ this.state.title }</h2>
        </article>
      </Link>
    );
  }
}

export default Item;