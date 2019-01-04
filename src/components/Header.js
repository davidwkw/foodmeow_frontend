import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components'
import axios from 'axios';


const Header = styled.div `
    position: fixed;
    right: 20px;
    bottom: 20px;
    background-color: green;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    z-index: 2;
    box-shadow: 3px 3px 10px grey;
    vertical-align: bottom;
    display: flex;
    align-items: center;
    justify-content: center;
    
    > h3 {
        font-size: 16px;
        font-weight: bold;
        color:white;
        text-align: center;
        margin: 0;
        
    }
`

const UberConnect = styled.div `
    position: fixed;
    right: 20px;
    bottom: 110px;
    background-color: black;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    z-index: 2;
    box-shadow: 3px 3px 10px grey;
    vertical-align: bottom;
    display: flex;
    align-items: center;
    justify-content: center;
    
    > h3 {
        font-size: 16px;
        font-weight: bold;
        color:white;
        text-align: center;
        margin: 0;
    }
`


class HeaderNav extends Component {
    state = {
        logoClicked: false,
        authURL:'',
        isSuccess: false,
        isAuthenticated: false
    }

    goBackHome = () => {
        this.setState({
            logoClicked: true
        })
    }

    componentDidMount(){
        console.log("Mounting Home")
        this.setState({
          loading: true
        })
        const curDate = new Date()
        const tokenExpire = localStorage.tokenExpire ? new Date(localStorage.getItem('tokenExpire')) : new Date()
        if (window.location.href.includes('code')){
            axios.post(
                'https://next-foodme.herokuapp.com/api/v1/uber/request/', 
                // 'http://localhost:8000/api/v1/uber/request/',
            {
                uber_code_url: window.location.href,
            })
            .then( res => {
                console.log("getting user credentials")
                console.log(res)
                localStorage.setItem('uberToken', res.data.uber_user_credentials.access_token)
                localStorage.setItem('expires', res.data.uber_user_credentials.expires_in_seconds)
                localStorage.setItem('refreshToken', res.data.uber_user_credentials.refresh_token)
                localStorage.setItem('scopes', res.data.uber_user_credentials.scopes)
                localStorage.setItem('tokenExpire', new Date( curDate.getTime() + res.data.uber_user_credentials.expires_in_seconds))
                this.setState({
                    loading: false,
                    credentials: res.data.uber_user_credentials,
                    isAuthenticated: true,
                    isSuccess: true
                })
            })
            .catch( err => {
                console.log(err)
                this.setState({
                    loading:false
                })
            })
        } else if (!localStorage.uberToken || curDate > tokenExpire ){
            localStorage.clear()
            axios({
                method:'post',
                url: 'https://next-foodme.herokuapp.com/api/v1/uber/request/',
                // url: 'http://localhost:8000/api/v1/uber/request/',
                header: {
                    'Content-Type':'application/json'
                }
            })
            .then(res => {
                console.log(res)
                this.setState({
                    isSuccess: true,
                    loading: false,
                    authURL: res.data.authentication_url
                })
            })
            .catch( err  => {
                console.log('ERROR: ', err)
                this.setState({
                    isSuccess: false,
                    loading: false
                })
            })
        } else {
            this.setState({
              isAuthenticated: true  
            })
        }
        console.log(localStorage)
    }
      
    openUberAuth = () => {
        window.open(this.state.authURL,'_self')
    }

    render() { 
        if(this.state.logoClicked){
            this.setState({
                logoClicked: false
            })
            return <Redirect to="/" />
        }
        return (
            <div>
                { this.state.isSuccess && !this.state.isAuthenticated
                    ?
                    <UberConnect>
                        <h3 onClick={this.openUberAuth}> Connect <br/> Uber </h3>
                    </UberConnect>
                    : ''
                }
                <Header>
                    <h3 onClick={this.goBackHome}> Food <br/> Me! </h3>
                </Header>
            </div>
         );
    }
}
 
export default HeaderNav;