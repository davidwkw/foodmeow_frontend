import React, { Component } from 'react';
import styled from 'styled-components';
import foodplaceholder2 from '../foodplaceholder2.jpg'
import star_1 from '../regular_1.png'


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
        name: "Patsagi Kopitiam",
        review_count: 1,
        categories: {
            title: 'Chinese',
        },
     }
    
    
    
    render() { 
        return ( 
            <Card>
            <FirstColumn id="first">
                <h3> {this.state.name} </h3>
                <h4> {this.state.categories.title} </h4>
                <img src={star_1} />
                <button onClick={this.handleClick}> See Restaurant </button>
            
            </FirstColumn>
            <SecondColumn id="second">
                <img src={foodplaceholder2} />
            </SecondColumn>
            </Card>
         );
    }
}
 
export default DisplayCard;