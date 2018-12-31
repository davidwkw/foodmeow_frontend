import React, { Component } from 'react';
import './App.css';
import ResFilter from "./pages/ResFilter"
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import RestaurantShowPage from './pages/RestaurantShowPage';
import ReviewCard from './components/ReviewCard';
import AboutCard from './components/AboutCard';
import DisplayRestaurants from './pages/DisplayRestaurants';
import DisplayCard from './components/DisplayCard'
import HeaderNav from './components/Header';
import MapEx from './components/maps'




class App extends Component { 
  state = {
    businesses: []
  }

  updateBiz = (biz) => {
    console.log("biz search data being updated")
    this.setState({
      businesses: biz
    })
  }

  render() {
    console.log("Checking root state")
    console.log(this.state)
    return (
      <div>
        <HeaderNav />
        <Route exact path="/" render={props => <Home {...props} updateBiz={this.updateBiz} biz={this.state.businesses}/> }/>
        <Route exact path="/filter" component={ResFilter} />
        <Route exact path="/restaurant" component={RestaurantShowPage} />
        <Route exact path="/review" component={ReviewCard} />
        <Route exact path="/about" component={AboutCard} />
        <Route exact path="/display" render={props => <DisplayRestaurants {...props} biz={this.state.businesses} />} />
        <Route exact path="/card" component={DisplayCard} />
        <Route exact path="/map" component={MapEx} />
      </div>
    )

  }
}

export default App

