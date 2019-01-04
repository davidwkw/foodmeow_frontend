import React, { Component } from 'react';
import {geolocated} from 'react-geolocated';
import styled from 'styled-components';

import Loading from "../components/Loading";
import ResFilter from "../pages/ResFilter";
import axios from 'axios';


class Home extends Component {
  state = { 
    radius: 100,
    categories: '',
    limit: 5,
    price: '',
    loading: false,
  }

  componentDidMount(){
    localStorage.clear()
  }

  render() {
    console.log("IN home page")
    console.log(this.props)
    console.log(this.props.coords)
    console.log(this.props.isGeolocationAvailable)
    console.log(this.props.isGeolocationEnabled)
    return (
      <div>
        { this.state.loading 
          ? 
            <Loading />
          : 
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
                    <div>
                      <Loading/>
                    </div>
        
        }
      </div>
    )
    
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Home);


