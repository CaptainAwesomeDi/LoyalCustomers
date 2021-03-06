import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      theServerResponse:null
    }
  }
  componentDidMount() {
    axios.get('/api/').then((response) => {
      console.log(response.data)
      this.setState({theServerResponse:response.data.wtf});
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.theServerResponse}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
