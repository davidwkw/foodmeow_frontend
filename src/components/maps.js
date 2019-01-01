import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (
    <div style={{
        color: 'white', 
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
      }}>
        {text}
      </div>
);

class Maps extends Component {
  state = {
      center: {},
      zoom: 10
  }

  componentDidMount(){
      this.setState({
          center:{
              lat: this.props.coordinates.latitude,
              lng: this.props.coordinates.longitude
          }
      })
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height:'500px', width:'100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyA0U0FhssUwlIfMiu_qwP4c0gfGWOapDvI" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <Marker
            lat={this.props.coordinates.latitude}
            lng={this.props.coordinates.longitude}
            text={this.props.name}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;