import React, { Component } from 'react';
import DisplayCard from '../components/DisplayCard';
import styled from 'styled-components'
import HeaderNav from '../components/Header';

const Display = styled.div`
width: 80%;
display: block;
padding: 50px;
margin-left: auto;
margin-right: auto;



`



class DisplayRestaurants extends Component {
  state = {  }
  
  
  
  
  render() { 
    return ( 
      <div>
      <Display>
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />

        
      </Display>
      </div>
     );
  }
}
 
export default DisplayRestaurants;