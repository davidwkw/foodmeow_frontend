// Page with button to call uber
import React, {Component} from 'react';
import Loading from './Loading';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class UberButton extends Component {
    state = {
      loading: false
    }
    
    componentDidMount() {
      this.setState({
        loading: true,
      })
      console.log("checking for location search")
      console.log(this.props)
      console.log(window.location)
      if(window.location.href !== "https://react-foodme.herokuapp.com/restaurant"){
        axios.post('https://next-foodme.herokuapp.com/api/v1/uber/request/', {
          uber_code_url: window.location.href,
        })
        .then( res => {
          console.log("getting user credentials")
          console.log(res)
          localStorage.setItem('uberToken', res.data.uber_user_credentials.access_token)
          localStorage.setItem('expire', res.data.uber_user_credentials.expire_in_seconds)
          localStorage.setItem('refreshToken', res.data.uber_user_credentials.refresh_token)
          localStorage.setItem('scope', res.data.uber_user_credentials.scope)
          this.setState({
            loading: false,
            credentials: res.data.uber_user_credentials,
          })
        })
        .catch( err => {
          console.log(err)
          this.setState({
            loading:false
          })
        })
      } else {
        axios({
          method:'post',
          url: 'https://next-foodme.herokuapp.com/api/v1/uber/request/',
          header: {
            'Content-Type':'application/json'
          }
        })
        .then(res => {
          console.log("In componentDidMount")
          console.log(res)
          console.log(res.data.authentication_url)
          this.setState({
            authURL: res.data.authentication_url,
            isSuccess: true,
            loading: false
          })
          console.log("opening new window")
          window.open(res.data.authURL, '_self')
          // localStorage.setItem('bizId', this.props.biz_id)
        })
        .catch( err  => {
          console.log(err)
          this.setState({
            isSuccess: false,
            loading: false
          })
        })
      }

    }

    uberCall = uberToken => {
      const data = uberToken ? {access_token: uberToken} : {}
      return axios.post('https://www.next-foodme.herokuapp.com/api/v1/uber/request/', data) //JS Promise
    }
    
    
    callUber = e => {
      // this.uberCall(localStorage.getItem("uberToken"))
      console.log("in call Uber")
      console.log(localStorage)
      const data = {
        uber_user_credentials:{
          access_token: localStorage.getItem('uberToken'),
          refresh_token: localStorage.getItem('refreshToken'),
          expire_in_seconds: localStorage.getItem('expire'),
          scope: localStorage.getItem('scope')
        },
        request_ride: true,
        get_estimate: true,
        display_products: true,
        current_latitude: localStorage.getItem('curLat'),
        current_longitude: localStorage.getItem('curLng'),
        destination_latitude: localStorage.getItem('desLat'),
        destination_longitude: localStorage.getItem('desLng'),
        passenger_amt: 2
      }
      console.log("checking ride request payload")
      console.log(data)
      axios.post('https://www.next-foodme.herokuapp.com/api/v1/uber/request/', data)
      .then(res => {
        console.log("In UberCall click")
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
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
              ? <button onClick={this.callUber}>Call Uber</button>
              : ''
            }
        </div>
      )
    }
}