import React, { Component } from 'react';
import styled from 'styled-components'
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Star from '../components/stars'
import ReviewCard from '../components/ReviewCard';
import AboutCard from '../components/AboutCard'
import axios from 'axios';
import Loading from '../components/Loading';
import UberButton from '../components/UberButton';

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
    // display: flex;
    // justify-content: center;
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
    overflow: hidden;
    max-width: 100vw;
    max-height: max-content;

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
    padding: 40px 80px 80px 80px;
    height: max-content;
`
const ReviewTab = styled.div`
    height: max-content;
`

class RestaurantShowPage extends Component {
    constructor(props){
        super(props)
        this.state = { 
            loading: false,
            id:'',
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
        this.setState({
            loading: true
        })
        try{
            const biz = await axios.get(`https://next-foodme.herokuapp.com/api/v1/businesses/${this.props.location.state.id}`)
            const reviews = await axios.get(`https://next-foodme.herokuapp.com/api/v1/businesses/${this.props.location.state.id}/reviews`)

            this.setState({
                id: biz.data.id,
                name: biz.data.name,
                review_count: biz.data.review_count,
                image_url: biz.data.image_url,
                raitng: biz.data.rating,
                coordinates: biz.data.coordinates,
                price: biz.data.price,
                display_address: biz.data.location.display_address.join(", "),
                categories: biz.data.categories,
                isClosed: biz.data.is_closed,
                reviews: reviews.data.reviews,
                loading: false
            })
        } catch(e) {
            console.log(e)
        }
    }

    render() { 
        console.log(this.state)
        console.log(this.props.history)
        const { id, name, image_url, price, categories, rating, display_address, coordinates } = this.state
        return (
            <div>
            { this.state.loading 
                ? <Loading />
                : ''
            }
            <FirstColumn>
                <BannerImage src={image_url} alt="food palceholder" />
                <Inline>
                    { this.props.history.length > 0 
                        ? <button onClick={this.props.history.goBack}>Back</button>
                        : ''
                    }
                    <h3> {name}</h3>
                    <h4> {price} </h4>
                    <h4> 
                        {categories[0] !== undefined
                            ? categories.map((item, index) => (
                                <span key={index}>{item.title}{" "}</span>
                              ))
                            : <p>No categories available</p>
                        }
                    </h4>
                    <Star number={rating} />
                </Inline>
                    <hr />

                <MuiThemeProvider tabTemplateStyle={{backgroundColor: "white"}}>
                <Tabs
                    onChange={this.handleChange}
                >
                    <Tab label="About" value="a">
                        <InsideTab>
                            <AboutCard 
                                name={name} 
                                coordinates={coordinates}
                                address={display_address}
                            />
                        </InsideTab>
                    </Tab>
                    <Tab label="Reviews" value="b">
                        <ReviewTab>
                            <ReviewCard reviews={this.state.reviews} />
                        </ReviewTab>
                    </Tab>
                </Tabs>
                </MuiThemeProvider>
            </FirstColumn>
            <UberButton />
          </div>
          );
    }
}
 
export default RestaurantShowPage;




