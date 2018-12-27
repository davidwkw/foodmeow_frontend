import React, { Component } from 'react';
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
    state = {  }
    render() { 
        return ( 
            <Header>
                <h2> this is header </h2>
            </Header>
         );
    }
}
 
export default HeaderNav;