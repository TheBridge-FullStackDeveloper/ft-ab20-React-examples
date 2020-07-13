import React, { Component } from 'react'
import './ItemList.css'

import Item from '../Item/Item'

class ItemList extends Component {
  constructor(props){
    super(props)

    this.state = {}

    this.addItem = this.addItem.bind(this)
  }

  componentDidMount() {
    let items = [
      {
        id: 1,
        title: 'Lorem ipsum 1',
        img: 'img/smiley.png'
      },
      {
        id: 2,
        title: 'Lorem ipsum 2',
        img: 'img/smiley.png'
      }
    ]

    this.setState({...this.state, items: items})
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
        <div>{/*this.getItems()*/}</div>
        {/* <FormAddItem addItem={this.addItem} /> */}
      </section>
    )
  }
}

export default ItemList