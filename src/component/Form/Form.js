import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      weather: []
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const cityname = e.nativeEvent.target.elements[0].value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=DINNYCKELHÄR`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          weather: res.weather
        }, function() {
          console.log('Hopefully we have some weather', this.state.weather);
        })
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" placeholder="Type the city name here" name="city" />
          <button type="submit">Get weather</button>
        </form>
        { this.state.weather.length > 0 ? 
          <div className="App-weather">
            <img src={`http://openweathermap.org/img/w/${this.state.weather[0].icon}.png`} title="Title goes here" alt="A weather icon, describing the... weather" />
            <p>
              {this.state.weather[0].description}
            </p>
          </div>
          : <p>No results yet</p>
        }
      </div>
    );
  }
}

export default Form;
