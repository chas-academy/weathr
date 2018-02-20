import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form className="App-search" onSubmit={this.onFormSubmit}>
        <fieldset>
          <input type="text" placeholder="City name here" id="cityField" />
          <button className="button button-primary" type="submit">Get Weather</button>
        </fieldset>
      </form>
    );
  }
}

export default Form;