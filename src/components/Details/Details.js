import React, { Component } from 'react';
import './Details.css';

class Details extends Component {
  render() {
    return (
      <div className="App-details-wrapper">
        <div className="App-details">
          <div className="wind">
            <span className="label swip">Wind:</span>
            <span className="val swap">
              <span className="num swip">10</span>
              <span className="unit swap">mph</span>

              <span className="direction" title="SW">↑</span>
            </span>
          </div>

          <div className="humidity">
            <span className="label swip">Humidity:</span>
            <span className="val swap">
              <span className="num swip">78</span><span className="unit swap">%</span>
            </span>
          </div>

          <div className="dew_point">
            <span className="label swip">Dew Pt:</span>
            <span className="val swap">
              <span className="num">35</span><span className="unit">˚</span>
            </span>
          </div>

          <div className="clearfix"></div>

          <div className="uv_index uv0">
            <span className="label swip">UV Index:</span>
            <span className="val swap">
              <span className="num">1</span>
            </span>
          </div>

          <div className="visibility">
            <span className="label swip">Visibility:</span>
            <span className="val swap">
              <span className="num swip">9</span>
              <span className="unit swap">mi</span>
            </span>
          </div>

          <div className="pressure">
            <span className="label swip">Pressure:</span>
            <span className="val swap">
              <span className="num swip">1035</span>
              <span className="unit swap">mb</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
