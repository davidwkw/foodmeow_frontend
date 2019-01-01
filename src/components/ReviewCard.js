import React, { Component } from 'react';
import styled from 'styled-components';
import star_1 from '../regular_1.png'
import Star from './stars';

const Card = styled.div`
    display: flex;
    // margin: 50px;
    padding: 50px 100px 50px 100px;
    border-bottom: 2px solid #D3D3D3;

>h4 {
    font-size: 14px;
    display: inline-block;
    padding: 30px;
}
`

const FirstColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    max-height: 600px;

>img {
    width: 150px;
    height: 150px;
    display: inline-block;
    border-radius: 100%;
    margin-bottom: 10px;
}

>h4 {
    font-size: 14px;
    display: inline-block;
    padding-left: 20px;
}
`

const SecondColumn = styled.div`
    width: 75%;
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

export default class ReviewCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.id, 
            rating: "1",
            date: '6/26/2015',
            name: 'Kdsf Ldsjf',
            review: "Not your normal kopitiam here as they have a variety of dishes ranging from Malay food to western. Started a year ago, the western food here is amazing especially the Rib Eye Steak. To die for. The steak ordered, medium well, was cooked perfectly and with the very creamy mash potato as a side, it was the best mashed potato we have ever tasted. We also ordered the grilled chicken and mushroom where the chicken is tender and delicious, the Nasi goreng Black Peper Sotong have good flavor to it, and lastly Aglio olio seafood was delightfull. We dine in at around 11pm and it open untill late. The Service is good with friendly and attentive staff. Food came in a timely manner. Price range i would say is reasonable with a great food portion. Plus they have here free wifi. The place have a nice and clean. "
        }
    }
       
    render() { 
        console.log(this.props.reviews)
        return (  
            <div>
                { 
                    this.props.reviews !== undefined 
                    ?
                        this.props.reviews.map(item => (
                            <Card key={item.id}>
                                <FirstColumn>
                                    <img src={item.user.image_url} alt="biz" />
                                    <h4> {item.user.name} </h4>
                                </FirstColumn>
                                <SecondColumn>
                                    <Star number={item.rating} />
                                    <h4> {item.time_created} </h4>
                                    <p> {item.text} </p>
                                </SecondColumn>
                            </Card>
                            )
                        )
                    : 
                        <h2>Oops, no reviews were given for this restaurant</h2> 
                }
                
            </div>
        );
    }
}
 