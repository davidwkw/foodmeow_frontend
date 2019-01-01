import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';

import Star from './stars'


const Card = styled.div`
display: inline-block;
height: 400px;
padding: 50px;
`

const FirstColumn = styled.div`
padding: 20px;
width: 300px;
height: 250px;
border-radius: 30px;
display: inline-block;
background-color: white;
box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);


>h3 {
    font-weight: bold;
}

>h4 {
    font-size: 16px;
}
>button {
    display: block;
    margin-top: 30px;
    border-radius: 10px;
    background-color: #00CCBC;
    padding: 5px;
}
`
const SecondColumn = styled.div`

width: 300px;
height: 300px;
border-radius: 20px;
display: inline-block;
position: element(#first);
transform: translateY(-35px);
margin-left: -30px;

>img{
    object-fit: cover;
    width: 250px;
    height: 300px;
    border-radius: 20px;

}
`

class DisplayCard extends Component {    
    state = {
        clicked: false
    }

    viewRestaurant = () => {
        console.log("viewing restaurant")
        this.setState({
            clicked: true
        })
    }

    render() { 
        const { id, name, categories, rating, image_url, price } = this.props.biz
        
        if (this.state.clicked){
            return <Redirect to={{
                    pathname:"/restaurant",
                    state:{ id: id},                
                }}
            />
        }

        return ( 
            <Card>
                <FirstColumn id="first">
                    <h3> {name} </h3>
                    <h4>
                        {categories.map((item, index) => (
                        <span key={index}>{item.title}{'  '}</span>
                        ))}
                    </h4>
                    <h4>{price}</h4>
                    <Star number={rating} />    
                    <button onClick={this.viewRestaurant}> See Restaurant </button>
                </FirstColumn>
                <SecondColumn id="second">
                    <img src={image_url} alt="biz cover" />
                </SecondColumn>
            </Card>
         );
    }
}
 
export default DisplayCard;