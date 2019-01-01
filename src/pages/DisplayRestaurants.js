import React, { Component } from 'react';
import styled from 'styled-components'
import { Redirect } from 'react-router-dom';

import DisplayCard from '../components/DisplayCard';

const Display = styled.div`
  width: 80%;
  display: block;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
`
class DisplayRestaurants extends Component {
  render() { 
    console.log("In DisplayRestaurants")
    console.log(this.props)
    if(this.props.location.state.biz === undefined){
      console.log("redirecting...")
      return <Redirect to='/' />
    }
    return ( 
      <div>
      <Display>
        {this.props.location.state.biz.map( (biz) => (
          <DisplayCard key={biz.id} biz={biz} />
        ))}
      </Display>
      </div>
     );
  }
}
 
export default DisplayRestaurants;