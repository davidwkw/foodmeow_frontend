import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import RestaurantShowPage from './pages/RestaurantShowPage';
import DisplayRestaurants from './pages/DisplayRestaurants';
import HeaderNav from './components/Header';
import MapEx from './components/maps'

class App extends Component {
  render() {
    console.log("Checking root state")
    console.log(this.state)
    return (
      <div>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurant" component={RestaurantShowPage} />
          <Route exact path="/display" component={DisplayRestaurants} />
          <Route exact path="/map" component={MapEx} />
        </Switch>
      </div>
    )

  }
}

export default App

