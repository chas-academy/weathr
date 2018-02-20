import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Day extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="small-10 small-centered column">
            <div className="forecast-container">
              <h4>Datum</h4>
              <div className="row collapse">
                <div className="small-2 medium-3 column weather-icon">
                  <i className={`wi wi-owm-${weather.id}`} />
                </div>
                <div className="small-10 medium-9 column">
                  23 &deg; {tempType}
                  <br />
                  Beskrivning här
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Day;
