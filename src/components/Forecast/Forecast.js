import React, { Component } from 'react';
import Week from './Week/Week';
import Day from './Day/Day';

import './Forecast.css';

class Forecast extends Component {
  constructor() {
    super();
    this.state = {
      forecast: []
    }
  }

  render() {
    return (
      <div>
        { this.state.forecast && this.state.forecast.length > 0 ?
          <div className="App-forecast">
            {
              this.state.forecast.map((interval, index) => {
                return <Day key={index} interval={interval} />
              })
            }
          </div>
          : ''
        }
        <Week />
      </div>
    );
  }
}

export default Forecast;