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
        authURL:''
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
        axios({
          method:'post',
          url: 'https://next-foodme.herokuapp.com/api/v1/uber/request/',
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

          console.log(res.data.authentication_url)
        //   window.open(res.data.authentication_url, '_self')
          // localStorage.setItem('bizId', this.props.biz_id)
        })
        .catch( err  => {
          console.log('ERROR: ', err)
          this.setState({
            isSuccess: false,
            loading: false
          })
        }) 
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
                { this.state.isSuccess 
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