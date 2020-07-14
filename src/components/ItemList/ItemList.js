import React, { Component } from 'react'
import './ItemList.css'

import Item from '../Item/Item'

import dblink from './../../model/firebase-config'

class ItemList extends Component {
  constructor(props){
    super(props)

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this)
  }

  componentDidMount() {
    const db = dblink.database();

    db.ref('/items').on('value', (responseFB) => {
      this.setState({ ...this.state, items: responseFB.val()})
    })
  }

  componentDidUnmount() {
    // Operaciones de "destruccion"
    // P.e. cerrar la conexion

    //db.ref('/items').off('value');
  }

  getItems() {
    return this.state.items.map(item =>
      <Item data={item} />
    )
  }

  addItem() {
    let newItem = {
      id: this.state.items.length + 1,
      title: `Lorem ipsum ${this.state.items.length + 1}`,
      img: 'img/smiley.png'
    }

    this.addNewItem(newItem)
  }

  addNewItem(newItem) {
    this.setState({items: [...this.state.items, newItem]})
  }

  render() {
    return (
      <section>
        <div>{this.getItems()}</div>
        {/* <FormAddItem addItem={this.addItem} /> */}
      </section>
    )
  }
}

export default ItemList