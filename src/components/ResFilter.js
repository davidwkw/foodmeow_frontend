import React, { Component } from 'react';
import SelectMulti from '../components/Select'
import {
    MDBSelect,
    MDBSelectInput,
    MDBSelectOptions,
    MDBSelectOption,
  } from "mdbreact";

class ResFilter extends Component {
    state = { 
        cuisine: '',
     }
    
    
    handleSelect = ({target}) => {
        this.setState({
        [target.name]: target.value
        })
    }
    
    
    render() { 
        return (
            <div>
            <form id="filter-restaurant-form">
            <select className="browser-default custom-select" name="cuisine"  value={this.state.cuisine} onChange={this.handleSelect}>
              <option>What Cuisine would you like?</option>
              <option value="American">American</option>
              <option value="Arabic">Arabic</option>
              <option value="Asian">Asian</option>
              <option value="Australian">Australian</option>
              <option value="Bar">Bar</option>
              <option value="Barbeque">Barbeque</option>
            </select>
            
            <input className='btn btn-primary' type="submit" value="submit" form='filter-restaurant-form' />
            </form>
            </div>
    
        );
    }
}
 
export default ResFilter;