import React, { Component } from 'react';

import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      forecast: []
    }
  }

  handleErrors(response) {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
  }

  onFormSubmit(e) {
    e.preventDefault();
    const cityname = e.nativeEvent.target.elements[0].value;

    fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${cityname}&APPID=4c1ea0e9c021e1aa584d3393963c03e1&units=metric`)
      .then(this.handleErrors)
      .then(res => res.json())
      .then(res => {
        this.setState({
          forecast: res.list
        }, function() {
          debugger;
          // forecast is now here
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>
        <form className="App-search" onSubmit={this.onFormSubmit.bind(this)}>
          <div>
            <input type="text" placeholder="City name here" id="cityField" />
            <button className="button button-primary" type="submit">Search</button>
            <button className="button button-primary">Use your location</button>
          </div>
        </form>
      </header>
    );
  }
}

export default Header;
