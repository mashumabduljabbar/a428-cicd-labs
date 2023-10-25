import React, { Component } from 'react';
import { WiDaySunny, WiRain, WiSnow, WiThunderstorm, WiCloudy, WiFog } from 'react-icons/wi';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Weather App</h1>
        </header>
        <div className="weather-info">
          <h2>Weather in Jakarta</h2>
          <div>Temperature: 28°C</div>
          <div>Weather: Sunny</div>
          <div>Weather Description: Clear Sky</div>
          <div>
            <WiDaySunny size={64} color="#f9d71c" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
