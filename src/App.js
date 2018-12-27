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

  }
  


 
  
  render() {
    return (
      <div>
      <HeaderNav />
      <Route exact path="/" component={Home} />
      <Route exact path="/filter" component={ResFilter} />
      <Route exact path="/restaurant" component={RestaurantShowPage} />
      <Route exact path="/review" component={ReviewCard} />
      <Route exact path="/about" component={AboutCard} />
      <Route exact path="/display" component={DisplayRestaurants} />
      <Route exact path="/card" component={DisplayCard} />
      <Route exact path="/map" component={MapEx} />


      </div>
    )

  }
}

export default App

