import React, { Component } from 'react';
import styled from 'styled-components';
import foodplaceholder2 from '../foodplaceholder2.jpg'
import star_1 from '../regular_1.png';
import star_2 from '../regular_2.png';
import star_3 from '../regular_3.png';
import star_4 from '../regular_4.png';
import star_5 from '../regular_5.png';


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
        const { name, categories, rating, image_url, review_count } = this.props.biz
        return ( 
            <Card>
            <FirstColumn id="first">
                <h3> {name} </h3>
                <h4>
                    {categories.map((item, index) => (
                       <span key={index}>{item.title}{'  '}</span>
                    ))}
                </h4>
                { rating === 5 
                    ? <img src={star_5} /> 
                    : rating >= 4 && rating < 5 
                        ?  <img src={star_4} />  
                        : rating >= 3 && rating < 4
                            ? <img src={star_3} />
                            : rating >=2 && rating < 3
                                ? <img src={star_2} />
                                : rating >= 1 && rating < 2
                                    ? <img src={star_1} />
                                    : "Rating not available"   
                }
                
                <button onClick={this.handleClick}> See Restaurant </button>
            
            </FirstColumn>
            <SecondColumn id="second">
                <img src={image_url} />
            </SecondColumn>
            </Card>
         );
    }
}
 
export default DisplayCard;