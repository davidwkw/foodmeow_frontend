import React, { Component } from 'react';
import {
    FormInline,
  } from "mdbreact";
  import CheckBox from '../components/CheckBox'
  import styled from 'styled-components'
  import cover from '../cover.jpg';
import MultiSelect from '../components/Select';


  


const Layout = styled.div`

`
const FirstColumn = styled.div`
float: left;
overflow: hidden;
max-width: 700px;
max-height: 1000px;

>img {
    width: 100%;
    height: 100%;
}
`
const SecondColumn = styled.div`
float: right;
margin-top: 120px;
margin-right: 80px;


>h1 {


}
`
const ResForm = styled.div`
margin-top: 50px;


`
const Spacing = styled.div `
margin-top: 20px
`

class ResFilter extends Component {
    constructor(props) {
        super(props)
    this.state = { 
        cuisine: '',
        radius: 10,
        price: [
            {id: 1, value: "1", label: "$", isChecked: false},
            {id: 2, value: "2", label: "$$",isChecked: false},
            {id: 3, value: "3", label: "$$$", isChecked: false},
            {id: 4, value: "4", label: "$$$$", isChecked: false}
          ]

     }
    }
    
    handleSelect = ({target}) => {
        this.setState({
        [target.name]: target.value
        })
    }
    
    handleDistance = (event) => {
        this.setState({radius: event.target.value});
      }

    handleCheckChieldElement = (event) => {
    let price = this.state.price
    price.forEach(price => {
        if (price.value === event.target.value)
            price.isChecked =  event.target.checked
    })
    this.setState({price: price})
    }



    render() { 
        return (
            <Layout>

            <FirstColumn>
            <img src={cover} />
            </FirstColumn>
            <SecondColumn>
            <h1> Don't know what to eat?</h1>
            <h1> Let us pick for you.</h1>

            
            <ResForm id="filter-restaurant-form" onSubmit={this.props.handleSubmit}>
            <p> Choose your cuisine:</p>
            
                {/* Choose Cuisine */}

            
                <MultiSelect />


                {/* Distance Slider */}
                <Spacing />
                <label htmlFor="customRange1">How far would you like to travel? {this.state.radius} km</label>
                <input min="0" max="30" type="range" className="custom-range" id="distance" value={this.state.radius} onChange={this.handleDistance} />

                {/* Price Checkbox */}
                <Spacing />
                <FormInline>
                {
                  this.state.price.map((price) => {
                    return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement} {...price} />)
                  })
                }
              </FormInline>    

              {/* Submit Button */}
            <Spacing />
              <input className='btn btn-primary' type="submit" value="submit"  form='filter-restaurant-form' />
            </ResForm>
          
            </SecondColumn>
            </Layout>
    
        );
    }
}
 
export default ResFilter;