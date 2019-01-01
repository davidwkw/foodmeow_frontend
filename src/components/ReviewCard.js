import React, { Component } from 'react';
import styled from 'styled-components';
import star_1 from '../regular_1.png'
import placeholder from '../placeholder.jpg'

const Card = styled.div`
    display: inline-block;
    margin: 50px;

>h4 {
    font-size: 14px;
    display: inline-block;
    padding: 30px;
}
`

const FirstColumn = styled.div`
    float: left;
    width: 200px;
    max-height: 600px;
    padding-top: 70px;

>img {
    width: 80px;
    height: 80px;
    display: inline-block;
}

>h4 {
    font-size: 14px;
    display: inline-block;
    padding-left: 20px;
}
`

const SecondColumn = styled.div`
    float: right;
    width: 500px;
    max-height: 500px;
    padding: 20px;

>p {
    font-size: 14px;
}
>h4 {
    display: inline-block;
    padding-left: 30px;
    font-size: 14px;
    font-weight: bold;

}
>img {
    padding-bottom: 20px;
}
`
const Spacing = styled.div`
    padding-bottom: 10px;
`

class ReviewCard extends Component {
    state = { 
        rating: "1",
        date: '6/26/2015',
        name: 'Kdsf Ldsjf',
        review: "Not your normal kopitiam here as they have a variety of dishes ranging from Malay food to western. Started a year ago, the western food here is amazing especially the Rib Eye Steak. To die for. The steak ordered, medium well, was cooked perfectly and with the very creamy mash potato as a side, it was the best mashed potato we have ever tasted. We also ordered the grilled chicken and mushroom where the chicken is tender and delicious, the Nasi goreng Black Peper Sotong have good flavor to it, and lastly Aglio olio seafood was delightfull. We dine in at around 11pm and it open untill late. The Service is good with friendly and attentive staff. Food came in a timely manner. Price range i would say is reasonable with a great food portion. Plus they have here free wifi. The place have a nice and clean. "

     }
    
    
    
    render() { 
        return (  
            <div>
                <Card>
                    <FirstColumn>
                        <img src={placeholder} alt="biz" />
                        <h4> {this.state.name} </h4>
                    </FirstColumn>
                    <SecondColumn>
                        <img src={star_1} alt="rating stars" />
                        <h4> {this.state.date} </h4>
                        <p> {this.state.review} </p>
                    </SecondColumn>
                </Card>
                <Spacing/>
            </div>
        );
    }
}
 
export default ReviewCard;