import React, { Component } from 'react';
import styled from 'styled-components'
import { Redirect } from 'react-router-dom';

import DisplayCard from '../components/DisplayCard';
import background from '../background.jpg';

const Display = styled.div`
  width: 100%;
  display: block;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Container = styled.div`
  background-image: url(${background});
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
      <Container>
        <Display>
          {this.props.location.state.biz.map( (biz) => (
            <DisplayCard key={biz.id} biz={biz} />
          ))}
        </Display>
      </Container>
     );
  }
}
 
export default DisplayRestaurants;