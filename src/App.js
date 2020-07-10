import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import ItemList from './components/ItemList/ItemList'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Profile from './components/Profile/Profile'
import Page404 from './components/Page404/Page404'

import AppGlobalData from './model/globals'

import { LanguageProvider } from './contexts/LanguageContext'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentLanguage: "es"
    }

    this.handleLanguage = this.handleLanguage.bind()
  }

  handleLanguage() {
    //this.setState({...this.state, ... })
  }

  render() {
    return (
      <div className="App">
        <LanguageProvider value={{currentLanguage: this.state.currentLanguage, handleLanguage: this.handleLanguage}}>
          <Header brand={AppGlobalData.brand} />
          
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/" component={ItemList} />
              <Route path="/itemDetail/:id" component={ItemDetail} />
              <Route path="/settings" component={Profile} />
              <Route component={Page404} />
            </Switch>
          </Router>

          <Footer brand={AppGlobalData.brand} />
        </LanguageProvider>
      </div>
    )
  }
}

export default App