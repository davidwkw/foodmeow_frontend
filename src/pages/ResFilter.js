import React, { Component } from 'react';
import CheckBox from '../components/CheckBox';
import styled from 'styled-components';
import cover from '../cover.jpg';
import MultiSelectReact from 'multi-select-react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Loading from '../components/Loading';

const Layout = styled.div`
`
const ColumnContainer = styled.div`
  display:flex;
  height: 100vh;
`
const FirstColumn = styled.div`
  overflow: hidden;
  width: 45%;
  max-width: 700px;
  max-height: 1000px;

  >img {
      width: 100%;
      height: 100%;
  }
`
const SecondColumn = styled.div`
  width:55%;
  padding: 50px;

`
const ResForm = styled.form`
  margin-top: 50px;
`
const Spacing = styled.div `
  margin-top: 20px
`

class ResFilter extends Component {
    constructor(props) {
      super(props)
      this.state = { 
        loading: false,
        biz: {},
        submitted: false,
        cuisine: {},
        radius: 5,
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

    fetchResData = (e) => {
      console.log('fetching Data....')
      console.log(this.props)
      // e.preventDefault()
      this.setState({
        loading: true
      })
      axios({
        method: 'post',
        url: 'https://next-foodme.herokuapp.com/api/v1/businesses/search/',
        params: {
          latitude: this.props.coords.latitude,
          longitude: this.props.coords.longitude,
          // radius: this.state.radius,
          // limit: 6,
        },
        headers: {
          // 'Authorization': "Bearer FkCrNEYXM_yqGVn-Emn5LEx_AKEYyNVPWMCZE2YkovTnUTFfBX_ZhkOJRpBPooSPdawjfoyfoyxUegW-QIIfmcntg7PPdt_ST6GwCCo6jsouacxiQgn5ngIVHL8ZXHYx",
          // 'Content-Type': 'application/x-www-form-urlencoded'
        },
      })
      .then(res => {
        console.log("displaying biz search results")
        console.log(res)
        this.setState({
          submitted: true,
          biz: res.data.businesses,
          loading: false
        })
        // this.props.updateBiz(res.data.businesses)
        // this.forceUpdate()
      })
      .catch(error => {
        console.log(error)
      })
    }
    
    handleSelect = ({target}) => {
      this.setState({
        [target.name]: target.value
      })
    }
    
    handleDistance = (event) => {
      this.setState({radius: event.target.value});
    }

    handleCheckChildElement = (event) => {
      let price = this.state.price
      price.forEach(price => {
        if (price.value === event.target.value){
            price.isChecked =  event.target.checked
        }
      })
      this.setState({price: price})
    }


    handleSubmit = (e) => {
      console.log('running')
      e.preventDefault();
      this.fetchResData(); 

      // if(this.state.submitted){
      //   return <Redirect to="/display" />
      // }
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

    render() { 
        const { submitted } = this.state

        const selectedOptionsStyles = {
            color: '#3c763d',
            backgroundColor: '#dff0d8',
          };
          const optionsListStyles = {
            backgroundColor: '#fcf8e3',
            color: '#8a6d3b',
          };

          if (submitted) {
            return <Redirect to={{
              pathname:"/display",
              state: {
                biz: this.state.biz
              },
            }} />;

          }

        return (
            <Layout>
                {this.state.loading 
                ? <Loading />
                : '' 
                }
                <ColumnContainer>
     
                  <FirstColumn>
                    <img src={cover} alt="cover" />
                  </FirstColumn>
                  <SecondColumn>
                    <h1> Don't know what to eat?</h1>
                    <h1> Let us pick for you.</h1>

                    
                    <ResForm id="filter-restaurant-form" onSubmit={this.handleSubmit}>
                      <p> Choose your cuisine:</p>
                      {/* Choose Cuisine */}
                      <div style={{ width: '80%' }} >
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
                      {
                          this.state.price.map((price, index) => {
                            return (<CheckBox key={index} handleCheckChildElement={this.handleCheckChildElement} {...price} />)
                          })
                      }

                      {/* Submit Button */}
                      <Spacing />
                      <input className='btn btn-primary' type="submit" value="submit"  form='filter-restaurant-form' />
                    </ResForm>
                  </SecondColumn>
                </ColumnContainer>
                }
            </Layout>
        );
    }
}
 
export default ResFilter;