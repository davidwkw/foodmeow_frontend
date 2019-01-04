// Page with button to call uber
import React, {Component} from 'react';
import Loading from './Loading';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UberContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`

const Uber = styled.button`
  display: inline-block;
  margin: auto;
  background-color: black;
  color: white;
  text-align: center;
  width: 75%;
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
`


export default class UberButton extends Component {
    state = {
      loading: false
    }
    
    async callUber() {
      // this.uberCall(localStorage.getItem("uberToken"))
      console.log("in call Uber")
      console.log(localStorage)
      const credentials = {
          access_token: localStorage.getItem('uberToken'),
          refresh_token: localStorage.getItem('refreshToken'),
          expire_in_seconds: localStorage.getItem('expires'),
          scope: localStorage.getItem('scopes')
      }

      const data1 = {
        uber_user_credentials: credentials,
        display_products: true,
        current_latitude: localStorage.getItem('curLat'),
        current_longitude: localStorage.getItem('curLng'),
      }

      const product = await axios.post("https://www.next-foodme.herokuapp.com/api/v1/uber/request/", data1)

      const data2 = {
        uber_user_credentials: credentials,
        display_products: true,
        get_estimate: true,
        current_latitude: localStorage.getItem('curLat'),
        current_longitude: localStorage.getItem('curLng'),
        destination_latitude: localStorage.getItem('desLat'),
        destination_longitude: localStorage.getItem('desLng'),
        passenger_amt: 2,
        product_id: product[0].product_id
      }

      const fare = await axios.post("https://www.next-foodme.herokuapp.com/api/v1/uber/request/", data2)

      const data3 = {
        uber_user_credentials: credentials,
        request_ride: true,
        get_estimate: true,
        display_products: true,
        product_id: product[0].product_id,
        fare_id: fare.fare_id,
        current_latitude: localStorage.getItem('curLat'),
        current_longitude: localStorage.getItem('curLng'),
        destination_latitude: localStorage.getItem('desLat'),
        destination_longitude: localStorage.getItem('desLng'),
        passenger_amt: 2
      }

      const ride = await axios.post("https://www.next-foodme.herokuapp.com/api/v1/uber/request/", data3)

      console.log("getting ride result")
      console.log(ride)
      // console.log("checking ride request payload")
      // console.log(data)
      // axios.post('https://www.next-foodme.herokuapp.com/api/v1/uber/request/', data)
      // .then(res => {
      //   console.log("In UberCall click")
      //   console.log(res)
      // })
      // .catch(err => {
      //   console.log(err)
      // })
    }
    
    render() {
      return (
        <div>
          { this.state.loading && <Loading /> }
          {
            this.state.isSuccess
              ? 
                <div>
                  <h1>You are now connected to uber</h1>
                  <a href={this.state.authURL}>Continue</a>
                </div>
              : <h1>Something went wrong. Try again.</h1>
            }
            { localStorage.uberToken !== 'undefined' || localStorage.uberToken !== undefined
              ? <UberContainer><Uber onClick={this.callUber}>Call Uber</Uber></UberContainer>
              : ''
            }
        </div>
      )
    }
}