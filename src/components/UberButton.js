// Page with button to call uber
import React, { Component } from 'react';
import Loading from './Loading';
import axios from 'axios';
import { Link } from 'react-router-dom';

const uberCall = uberToken => {
  const data = uberToken ? { access_token: uberToken } : {}
  return axios.get('/request', data) //JS Promise
}
export default class UberButton extends Component {
  state = {
    loading: false
  }


  componentDidMount() {
    this.setState({
      loading: true,
      uberAuthenticated: false,
    })
    // axios.post('https://next-foodme.herokuapp.com/api/v1/uber/request/', {
    //   uber_code_url: window.location.href,
    // })

    axios({
      method: 'post',
      url: 'https://next-foodme.herokuapp.com/api/v1/uber/request/',
      header: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log("In componentDidMount")
        console.log(res)
        // localStorage.setItem('uberToken', res.access_token)
        this.setState({
          authentication_url: res.data.authentication_url,
          isSuccess: true,
          loading: false
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          isSuccess: false,
          loading: false
        })
      })
  }

  uberCall = uberToken => {
    const data = uberToken ? { access_token: uberToken } : {}
    return axios.post('https://www.next-foodme.herokuapp.com/api/v1/uber/request', data) //JS Promise
  }


  onClick = e => {
    this.uberCall(localStorage.getItem("uberToken"))
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
        {this.state.loading && <Loading />}
        {
          this.state.isSuccess
            ?
            <div>
              <h1>You are now connected to uber</h1>
              <a href={this.state.authentication_url}>Continue</a>
            </div>
            : <h1>Something went wrong. Try again.</h1>
        }
        <button onClick={this.onClick}>Call Uber</button>
      </div>
    )
  }
}