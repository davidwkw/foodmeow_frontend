import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MDBRangeInput, MDBRow } from "mdbreact";
import ResFilter from "./components/ResFilter"


class App extends Component {
  render() {
    return (
      <div className="App">
        <ResFilter />
      </div>
    );
  }
}

export default App;
