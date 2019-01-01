import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components'


const Header = styled.div `
    height: 60px;
    padding-left:50px;
    padding-right: 50px;
    vertical-align: middle;

    >h2 {    
        vertical-align: middle;
        display: inline-block;
        position: absolute;
        font-size: 16px;
        text-align: center;
        height: auto
    }
`


class HeaderNav extends Component {
    state = {
        logoClicked: false,
    }
    goBackHome = () => {
        this.setState({
            logoClicked: true
        })
    }

    render() { 
        if(this.state.logoClicked){
            this.setState({
                logoClicked: false
            })
            return <Redirect to="/" />
        }
        return ( 
            <Header>
                <h2 onClick={this.goBackHome}> logo </h2>
            </Header>
         );
    }
}
 
export default HeaderNav;