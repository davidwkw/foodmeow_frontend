import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components'


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
            <div>
                <Header>
                    <h3 onClick={this.goBackHome}> Food <br/> Me! </h3>
                </Header>
            </div>
         );
    }
}
 
export default HeaderNav;