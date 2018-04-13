import React, { Component } from 'react';
import { Header, Content, Forecast, Details, Footer } from '../../components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Weathr"/>
        <Details />
        <Content>
          <h2>Here's the weather</h2>
          <Forecast />
        </Content>
        <Footer/>
      </div>
    );
  }
}

export default App;
