import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MDBRangeInput, MDBRow } from "mdbreact";
import ResFilter from "./components/ResFilter"
import SelectMulti from "./components/Select"
import {geolocated} from 'react-geolocated';



class App extends Component {
  state = { 
  }
  

  
 
  
  render() {
    return (!this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <div>
              <SelectMulti /> 
              <SelectMulti />
            </div>
          : <div>Getting the location data&hellip; </div>
        
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);


