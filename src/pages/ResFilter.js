import React, { Component } from 'react';
import {
    FormInline,
  } from "mdbreact";
  import CheckBox from '../components/CheckBox'
  import styled from 'styled-components'
  import cover from '../cover.jpg';
import MultiSelectReact from 'multi-select-react';



  


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
        cuisine: {},
        radius: 10,
        price: [
            {id: 1, value: "1", label: "$", isChecked: false},
            {id: 2, value: "2", label: "$$",isChecked: false},
            {id: 3, value: "3", label: "$$$", isChecked: false},
            {id: 4, value: "4", label: "$$$$", isChecked: false}
          ],
          multiSelect: [{ label: 'Chinese', value: true },
          { label: 'Malaysian' },
          { label: 'Cafes' },
          { label: 'Japanese' },
          { label: 'Asian Fusion' },
          { label: 'Indian' },
          { label: 'Thai' },
          { label: 'Seafood' },
          { label: 'Korean' },
          { label: 'Bars' },
          { label: 'Noodles' },
          { label: 'Italian' },
          { label: 'Burgers' },
          { label: 'Breakfast' },
          { label: 'Desserts' },
        
        ],
        selected: [],

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

    handleSubmit = () => {
        console.log('running')
        const { multiSelect: selections } = this.state
        const cuisines = selections.filter(selection => selection.value)
        console.log(cuisines)
        
      }


    render() { 
        const selectedOptionsStyles = {
            color: '#3c763d',
            backgroundColor: '#dff0d8',
          };
          const optionsListStyles = {
            backgroundColor: '#fcf8e3',
            color: '#8a6d3b',
          };
        return (
            <Layout>

            <FirstColumn>
            <img src={cover} />
            </FirstColumn>
            <SecondColumn>
            <h1> Don't know what to eat?</h1>
            <h1> Let us pick for you.</h1>

            
            <ResForm id="filter-restaurant-form" onSubmit={this.handleSubmit}>
            <p> Choose your cuisine:</p>
            
                {/* Choose Cuisine */}

            
            <div style={{ width: '627px' }} >
                <MultiSelectReact 
                className="browser-default custom-select"
                  options={this.state.multiSelect}
                  optionClicked={this.optionClicked.bind(this)}
                  selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
                  selectedOptionsStyles={selectedOptionsStyles}
                  optionsListStyles={optionsListStyles}
                  
                />
              </div>


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
    optionClicked(optionsList) {
        console.log(
          'here the lib adds value false to the selected item',
          optionsList
        );
        this.setState({ multiSelect: optionsList });
      }
      selectedBadgeClicked(optionsList) {
        console.log(
          'here the lib adds value true to the selected item',
          optionsList
        );
        this.setState({ multiSelect: optionsList });
      }
}
 
export default ResFilter;