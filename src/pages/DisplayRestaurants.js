import React, { Component } from 'react';
import styled from 'styled-components'
import { Redirect } from 'react-router-dom';

import DisplayCard from '../components/DisplayCard';
import HeaderNav from '../components/Header';

const Display = styled.div`
  width: 80%;
  display: block;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
`
class DisplayRestaurants extends Component {
  render() { 
    if(this.props.biz.length === 0){
      console.log("redirecting...")
      return <Redirect to='/' />
    }
    return ( 
      <div>
      <Display>
        {this.props.biz.map( (biz,index) => (
          <DisplayCard index={index} biz={biz} />
        ))}
      </Display>
      </div>
     );
  }
}
 
export default DisplayRestaurants;