import React, { Component } from 'react';
import ResFilter from "../pages/ResFilter"
import {geolocated} from 'react-geolocated';
import { BrowserRouter, Route } from 'react-router-dom'

class Home extends Component {
  state = { 
    radius: 100,
    categories: '',
    limit: 5,
    price: '',
  }
  
  componentWillUnmount(){
    console.log("Home unmounted")
  }

  render() {
    console.log("IN home page")
    console.log(this.props)
    console.log(this.props.coords)
    console.log(this.props.isGeolocationAvailable)
    console.log(this.props.isGeolocationEnabled)
    return (
      !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
          ? <div>Geolocation is not enabled</div>
          : this.props.coords
            ?   
              <div>
                <ResFilter coords={this.props.coords} />
              </div> 
            : 
              <div>Getting the location data&hellip; </div>
    )
    
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Home);


