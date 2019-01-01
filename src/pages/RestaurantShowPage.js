import React, { Component } from 'react';
import styled from 'styled-components'
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Star from '../components/stars'
import ReviewCard from '../components/ReviewCard';
import AboutCard from '../components/AboutCard'
import axios from 'axios';

const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
 
    },
  };
  
const BannerImage = styled.img`
  width: 100%;
  min-height: 500px ;
`
  
const Inline = styled.div`
    display: inline-block;
    width: 100%;
    padding-left: 80px;


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
    max-width: 100vw;
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
const InsideTab = styled.div`
    padding: 80px;
`

class RestaurantShowPage extends Component {
    constructor(props){
        super(props)
        this.state = { 
            name: "Patsagi Kopitiam",
            review_count: 1,
            image_url: '',
            rating: 4,
            coordinates: {
                latitude: 3.13512959892834,
                longitude: 101.629923507571
            },
            price: '$',
            display_address: '',
            categories: {}
        }
    }

    async componentDidMount(){
        await axios({
            method: 'post',
            url: `https://next-foodme.herokuapp.com/api/v1/businesses/${this.props.location.state.id}`,
        })
        .then( res => {
            this.setState({
                name: res.data.name,
                review_count: res.data.review_count,
                image_url: res.data.image_url,
                raitng: res.data.raintg,
                coordinates: res.data.coordinates,
                price: res.data.price,
                display_address: res.data.address,
                categories: res.data.categories,
            })
        }) 
        .catch( err => {
            console.log(err)
        })
    }

    render() { 
        console.log(this.state)
        return (
            <div>
            <FirstColumn>
                <BannerImage src={this.state.image_url} alt="food palceholder" />
                <Inline>
                    <h3> {this.state.name}</h3>
                    <h4> {this.state.price} </h4>
                    <h4> 
                        {this.state.categories[0] !== undefined
                            ? this.state.categories.map((item, index) => (
                                <span key={index}>{item.title}{" "}</span>
                              ))
                            : <p>No categories available</p>
                        }
                    </h4>
                    <Star number={this.state.rating} />
                </Inline>
                    <hr />

                <MuiThemeProvider tabTemplateStyle={{backgroundColor: "white"}}>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <Tab label="About" value="a">
                    <InsideTab>
                        <h2 style={styles.headline}>About</h2>
                        <AboutCard />
                        <p>
                        Tabs are also controllable if you want to programmatically pass them their values.
                        This allows for more functionality in Tabs such as not
                        having any Tab selected or assigning them different values.
                        </p>
                    </InsideTab>
                    </Tab>
                    <Tab label="Reviews" value="b">
                    <InsideTab>
                        <h2 style={styles.headline}>Reviews</h2>

                        <ReviewCard />
                
                        <p>
                        This is another example of a controllable tab. Remember, if you
                        use controllable Tabs, you need to give all of your tabs values or else
                        you wont be able to select them.
                        </p>
                    </InsideTab>
                    </Tab>
                </Tabs>
                </MuiThemeProvider>
            </FirstColumn>
          <SecondColumn>
          </SecondColumn>
          </div>
          );
    }
}
 
export default RestaurantShowPage;




