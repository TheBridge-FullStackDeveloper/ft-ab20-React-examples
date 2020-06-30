import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  constructor(props){
    super(props);

    this.state = this.props.data;
  }

  render() {
    return (
      <article className="Item">
        <img src={ this.state.img } alt={ this.state.title } />
        <h2>{ this.state.title }</h2>
      </article>
    );
  }
}

export default Item;