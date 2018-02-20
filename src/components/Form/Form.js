import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      weather: []
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

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=`)
      .then(this.handleErrors)
      .then(res => res.json())
      .then(res => {
        this.setState({
          weather: res.weather
        }, function() {
          console.log('Hopefully we have some weather', this.state.weather);
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form className="App-search" onSubmit={this.onFormSubmit.bind(this)}>
          <fieldset>
            <input type="text" placeholder="City name here" id="cityField" />
            <button className="button button-primary" type="submit">Get Weather</button>
          </fieldset>
        </form>
        { this.state.weather && this.state.weather.length > 0 ?
          <div className="App-weather">
            <img src={`http://openweathermap.org/img/w/${this.state.weather[0].icon}.png`} title="Title goes here" alt="A weather icon, describing the... weather" />
            <p>
              {this.state.weather[0].description}
            </p>
          </div>
          : <p>No results yet, try searching above.</p>
        }
      </div>
    );
  }
}

export default Form;