// Page with button to call uber
import React, { Component } from 'react';
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
    
    dummyCall = () => {
      window.open("https://m.uber.com/ul/?client_id=<CLIENT_ID>&action=setPickup&pickup[latitude]=37.775818&pickup[longitude]=-122.418028&pickup[nickname]=UberHQ&pickup[formatted_address]=1455%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103&dropoff[latitude]=37.802374&dropoff[longitude]=-122.405818&dropoff[nickname]=Coit%20Tower&dropoff[formatted_address]=1%20Telegraph%20Hill%20Blvd%2C%20San%20Francisco%2C%20CA%2094133&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d&link_text=View%20team%20roster&partner_deeplink=partner%3A%2F%2Fteam%2F9383", "_blank")
    }

    async callUber() {
      // this.uberCall(localStorage.getItem("uberToken"))
      console.log("in call Uber")
      console.log(localStorage)
      const credentials = {
          "access_token": localStorage.getItem('uberToken'),
          "refresh_token": localStorage.getItem('refreshToken'),
          "expire_in_seconds": localStorage.getItem('expires'),
          "scope": localStorage.getItem('scopes')
      }

      const data1 = {
        "uber_user_credentials": credentials,
        "display_products": true,
        "current_latitude": localStorage.getItem('curLat'),
        "current_longitude": localStorage.getItem('curLng'),
      }

      console.log("product request")
      console.log(data1)

      const product = await axios({
        method:'post',
        url: `https://sandbox-api.uber.com/v1.2/products?latitude=${localStorage.getItem('curLat')}&longitude=${localStorage.getItem('curLng')}`,
        // url: 'http://localhost:8000/api/v1/uber/request/',
        // data: JSON.stringify(data1),
        headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.getItem('uberToken')}`
        },
      })

      // const product = await axios({
      //   method:'post',
      //   url: 'https://next-foodme.herokuapp.com/api/v1/uber/request/',
      //   // url: 'http://localhost:8000/api/v1/uber/request/',
      //   data: JSON.stringify(data1),
      //   headers: {
      //       'Content-Type':'application/json'
      //   },
      // })

      // const product = await axios.post("https://next-foodme.herokuapp.com/api/v1/uber/request/", data1)
      // const product = await axios.post("http://localhost:8000/api/v1/uber/request/", data1)

      console.log(product)

      const data2 = {
        "uber_user_credentials": credentials,
        "display_products": true,
        "get_estimate": true,
        "current_latitude": localStorage.getItem('curLat'),
        "current_longitude": localStorage.getItem('curLng'),
        "destination_latitude": localStorage.getItem('desLat'),
        "destination_longitude": localStorage.getItem('desLng'),
        "passenger_amt": 2,
        "product_id": product[0].product_id
      }
      
      console.log("product request")
      console.log(data2)

      const fare = await axios({
        method:'post',
        url: 'https://next-foodme.herokuapp.com/api/v1/uber/request/',
        // url: 'http://localhost:8000/api/v1/uber/request/',
        header: {
            'Content-Type':'application/json'
        },
        body:data2,
      })
      
      console.log(fare)
      // const fare = await axios.post("https://next-foodme.herokuapp.com/api/v1/uber/request/", data2)

      const data3 = {
        "uber_user_credentials": credentials,
        "request_ride": true,
        "get_estimate": true,
        "display_products": true,
        "product_id": product[0].product_id,
        "fare_id": fare.fare_id,
        "current_latitude": localStorage.getItem('curLat'),
        "current_longitude": localStorage.getItem('curLng'),
        "destination_latitude": localStorage.getItem('desLat'),
        "destination_longitude": localStorage.getItem('desLng'),
        "passenger_amt": 2
      }

      const ride = await axios({
        method:'post',
        url: 'https://next-foodme.herokuapp.com/api/v1/uber/request/',
        // url: 'http://localhost:8000/api/v1/uber/request/',
        header: {
            'Content-Type':'application/json'
        },
        body: data3,
      })
      console.log("getting ride request")
      console.log(data3)

      // const ride = await axios.post("https://next-foodme.herokuapp.com/api/v1/uber/request/", data3)

      
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
            {/* { localStorage.uberToken !== 'undefined' || localStorage.uberToken !== undefined */}
              {/* ? <UberContainer><Uber onClick={this.callUber}>Call Uber</Uber></UberContainer> */}
              <UberContainer><Uber onClick={this.dummyCall}>Call Uber</Uber></UberContainer>
            {/* } */}
        </div>
      )
    }
}