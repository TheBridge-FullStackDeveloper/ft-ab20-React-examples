import React, { Component } from 'react';
import './ItemDetail.css';

class ItemDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      warmy: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ ...this.state, warmy: !this.state.warmy });
  }

  render() {
    return (
      <div onClick={this.handleClick} className={ this.state.warmy ? "calentito" : "frejquito" }>
        Soy el item {this.state.id}
      </div>
    );
  }
}

export default ItemDetail;