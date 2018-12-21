import React, { Component } from 'react';
import ResFilter from "../pages/ResFilter"
import {geolocated} from 'react-geolocated';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom'




class Home extends Component {
  state = { 
    radius: 100,
    categories: '',
    limit: 5,
    price: '',
  }
  


fetchResData = (e) => {
  e.preventDefault()
  axios({
    method: 'get',
    url: `https://api.yelp.com/v3/businesses/search?latitude=${this.props.coords.latitude}&longitude=${this.props.coords.longitude}&radius=${this.state.radius}&limit=${this.state.limit}`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer FkCrNEYXM_yqGVn-Emn5LEx_AKEYyNVPWMCZE2YkovTnUTFfBX_ZhkOJRpBPooSPdawjfoyfoyxUegW-QIIfmcntg7PPdt_ST6GwCCo6jsouacxiQgn5ngIVHL8ZXHYx`,
    },
  })
  .then(res => {
    console.log(res)
  })
}


 
  
  render() {
    console.log(this.props.coords)
    return (!this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
        ?   <div>

              <ResFilter />
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
})(Home);


