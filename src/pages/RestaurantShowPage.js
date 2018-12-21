import React, { Component } from 'react';
import foodplaceholder from '../foodplaceholder.jpg'
import styled from 'styled-components'
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import star_1 from '../regular_1.png'
import star_2 from '../regular_2.png'

const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
  };
  
const Inline = styled.div`
display: inline-block;
width: 100%;
margin-left: 80px;


> h3 {
    display: inline-block;
    padding: 30px;
    font-weight: bold;
}
> h4 {
    display: inline-block;
    padding: 30px;
    font-size: 14px;
}
> img {
    display: inline-block;
    padding: 30px; 
}
`
const FirstColumn = styled.div`
float: left;
overflow: hidden;
max-width: 80%;
max-height: 1000px;

>img {
    max-height: 350px;
}
> hr {
    border-top: 1px solid #8c8b8b;
    }
`
const SecondColumn = styled.div`
float: right;
margin-top: 120px;
margin-right: 80px;
`

class RestaurantShowPage extends Component {
    constructor(props){
        super(props)
    this.state = { 
        name: "Patsagi Kopitiam",
        review_count: 1,
        image_url: '',
        rating: 1,
        coordinates: {
            latitude: 3.13512959892834,
            longitude: 101.629923507571
        },
        price: '$',
        display_address: '',
        categories: {
            title: 'Chinese',
        },
        stars: [],
        value: 'a',
     }
    }

handleChange = (value) => {
    this.setState({
        value: value,
    });
    };

imageSource = () => {
var i;
var stars;

for (i = 0; i < 5; i++) { 
   if (i === this.state.rating){
    var link = "{star_"
    stars = link.concat(i, '}')
   }
   return  <img src={stars} />
}
}


   
    render() { 

        return (
            <div>
            <FirstColumn>
                <img src={foodplaceholder} />
            <Inline>
                <h3> {this.state.name}</h3>
                <h4>  {this.state.price} </h4>
                <h4> {this.state.categories.title} </h4>
                <img src={star_1} />
            </Inline>
                <hr />
            </FirstColumn>


            <SecondColumn>

            </SecondColumn>
            <MuiThemeProvider>
            <Tabs
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Tab label="About" value="a">
              <div>
                <h2 style={styles.headline}>About</h2>
                <p>
                  Tabs are also controllable if you want to programmatically pass them their values.
                  This allows for more functionality in Tabs such as not
                  having any Tab selected or assigning them different values.
                </p>
              </div>
            </Tab>
            <Tab label="Reviews" value="b">
              <div>
                <h2 style={styles.headline}>Reviews</h2>
                <p>
                  This is another example of a controllable tab. Remember, if you
                  use controllable Tabs, you need to give all of your tabs values or else
                  you wont be able to select them.
                </p>
              </div>
            </Tab>
          </Tabs>
          </MuiThemeProvider>
          </div>
          );
    }
}
 
export default RestaurantShowPage;




