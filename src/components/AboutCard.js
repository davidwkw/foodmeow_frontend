import React, { Component } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import Maps from '../components/maps';

const Card = styled.div`
    display: flex;
    width: 100%;
`

const Spacing = styled.div`
    margin-bottom: 30px;
`

const SecondColumn = styled.div`
    display: inline-block;
    width: 50%;
    padding: 20px;

    >img {
        max-width: 300px;
    }
`

const FirstColumn = styled.div`
    flex: 0 4 60%;
    padding: 20px;
    width: 50%;
    display: inline-block;



    >h2 {
        font-size: 22px;
    }

    >h4 {
        font-size: 16px;
    }
`

class AboutCard extends Component {
    state = { 
        hours: 'Mon - Sun 11:00 AM - 9:30 PM',
        display_address: 'G9 & G9A,Ground Floor, Avenue K, Jalan Ampang, 50450 Kuala Lumpur'
        ,

     }

    //  fetchMap = (e) => {
    //     e.preventDefault()
    //     axios({
    //       method: 'get',
    //     //   url: `https://api.yelp.com/v3/businesses/search?latitude=${this.props.coords.latitude}&longitude=${this.props.coords.longitude}&radius=${this.state.radius}&limit=${this.state.limit}`,
    //       url: `https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/0,0,2/600x600?access_token=pk.eyJ1IjoibmFrYW4iLCJhIjoiY2pwdGZuMXNoMDVrNDQ1cDJyeWJqYmsybSJ9.XorrBczUa3M6K5OELMnyow`,
    //       headers: {
    //         'Access-Control-Allow-Origin': '*',
    //       },
    //     })
    //     .then(res => {
    //       console.log(res)
    //     })
    //   }
      

    
    render() { 
        return ( 
            <Card>
                <FirstColumn>
                    <h2> Opening Hours </h2>
                    <h4> {this.state.hours} </h4>
                <Spacing />

                    <h2> Address </h2>
                    <h4> {this.state.display_address} </h4>
                </FirstColumn>
                <SecondColumn>
                    <Maps name={this.props.name} coordinates={this.props.coordinates}/>
                </SecondColumn>
            </Card>
         );
    }
}
 
export default AboutCard;