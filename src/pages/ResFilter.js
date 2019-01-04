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
const Spacing = styled.div`
  margin-top: 20px
`
const selectedOptionsStyles = {
  color: '#3c763d',
  backgroundColor: '#dff0d8',
};

const optionsListStyles = {
  backgroundColor: '#fcf8e3',
  color: '#8a6d3b',
};
class ResFilter extends Component {
  state = {
    currentLatitude: this.props.coords.latitude,
    currentLongitude: this.props.coords.longitude,
    isLoading: false,
    biz: {},
    isSubmitted: false,
    radius: 5,
    prices: [
      { id: 1, value: 1, label: "$", isChecked: false },
      { id: 2, value: 2, label: "$$", isChecked: false },
      { id: 3, value: 3, label: "$$$", isChecked: false },
      { id: 4, value: 4, label: "$$$$", isChecked: false }
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

  fetchResData = (e) => {
      const { currentLatitude, currentLongitude, radius, multiSelect, prices } = this.state
      e.preventDefault()
      this.setState({
        isLoading: true
      })
      localStorage.setItem('curLat', 37.4429964 )
      localStorage.setItem('curLng', -122.1545229)
      const checkedPrice = prices.find(obj => obj.isChecked)
      const params = {
        latitude: 37.4429964,
        longitude: -122.1545229,
        // latitude: this.props.coords.latitude,
        // longitude: this.props.coords.longitude,
        radius: radius * 1000,
        categories: multiSelect.filter(obj => obj.value).map(item => item.label).join(','),
        price: checkedPrice ? checkedPrice.value : '',
      }
      axios({
        method: 'get',
        url: 'https://next-foodme.herokuapp.com/api/v1/businesses/search/',
        params,
        // headers: {
        //   'Authorization': `Bearer ${this.getJWTToken()}`,
        // },
      })
      .then(res => {
        console.log("displaying biz search results")
        console.log(res)
        this.setState({
          isSubmitted: true,
          biz: res.data.businesses,
          isLoading: false
        })
        // this.props.updateBiz(res.data.businesses)
        // this.forceUpdate()
      })
      .catch(error => {
        console.log(error)
        this.setState({
          isLoading: false
        })
      })
  }

  handleSelect = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  handleDistance = (e) => {
    this.setState({ radius: e.target.value });
  }

  handleCheckChildElement = (e) => {
    const { prices } = this.state
    this.setState({
      prices: prices.map(p => ({
        ...p,
        isChecked: p.value == e.target.value
      }))
    })
  }

  optionClicked = (optionsList) => {
    console.log(
      'here the lib adds value false to the selected item',
      optionsList
    );
    this.setState({
      multiSelect: optionsList,
    });
  }

  selectedBadgeClicked = (optionsList) => {
    console.log(
      'here the lib adds value true to the selected item',
      optionsList,
    );
    this.setState({
      multiSelect: optionsList,
    });
  }

  render() {
    const { isSubmitted, radius, isLoading, prices, multiSelect, biz } = this.state

    if (isSubmitted) {
      return <Redirect to={{
        pathname: "/display",
        state: {
          biz: biz
        },
      }} />;
    }

    return (
      <Layout>
        {isLoading
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


            <ResForm id="filter-restaurant-form" onSubmit={this.fetchResData}>
              <p> Choose your categories:</p>
              {/* Choose categories */}
              <div style={{ width: '80%' }} >
                <MultiSelectReact
                  className="browser-default custom-select"
                  options={multiSelect}
                  optionClicked={this.optionClicked}
                  selectedBadgeClicked={this.selectedBadgeClicked}
                  selectedOptionsStyles={selectedOptionsStyles}
                  optionsListStyles={optionsListStyles}
                />
              </div>

              {/* Distance Slider */}
              <Spacing />
              <label htmlFor="customRange1">How far would you like to travel? {radius} km</label>
              <input min="0" max="30" type="range" className="custom-range" id="distance" value={radius} onChange={this.handleDistance} />

              {/* Price Checkbox */}
              <Spacing />
              {
                prices.map((price, index) => {
                  return (<CheckBox key={index} handleCheckChildElement={this.handleCheckChildElement} {...price} />)
                })
              }

              {/* Submit Button */}
              <Spacing />
              <input className='btn btn-primary' type="submit" value="submit" form='filter-restaurant-form' />
            </ResForm>
          </SecondColumn>
        </ColumnContainer>
        }
      </Layout>
    );
  }
}

export default ResFilter;