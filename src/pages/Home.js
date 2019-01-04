import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import styled from 'styled-components';

import Loading from "../components/Loading";
import ResFilter from "../pages/ResFilter";
import DeadImage from "../dead.png";
import axios from 'axios';

const Dead = styled.div`
  background-color: lightblue;
  width: 250px;
  height: 250px;
  border-radius: 100%;
  overflow: hidden;
`

const DeadContainer = styled.div`
  position: fixed;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`

const Img = styled.img`
  position: absolute;
  top: 55px;
  left: 55px;
  width: 50%;
`


class Home extends Component {

  state = {
    radius: 100,
    categories: '',
    limit: 5,
    price: '',
    loading: false,
  }

  reloadPage = () => {
    window.location.reload()
  }

  render() {
    // console.log("IN home page")
    console.log(this.props)
    console.log(this.props.coords)
    // console.log(this.props.isGeolocationAvailable)
    // console.log(this.props.isGeolocationEnabled)
    return (
      <div>
        { this.state.loading 
          ? 
            <Loading />
          : 
            !this.props.isGeolocationAvailable
              ? <div>Your browser does not support Geolocation</div>
              : !this.props.isGeolocationEnabled
                ? <DeadContainer>
                      <Dead onClick={this.reloadPage}>
                        <Img src={DeadImage} alt="dead logo"/>
                      </Dead>
                      <p style="text-align: center;">Geolocation not enabled, click to refresh</p>
                  </DeadContainer>
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


