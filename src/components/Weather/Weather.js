class Weather extends Component {
  constructor() {
    super();
    this.state = {
      weather: []
    }
  }

  render() {
    return (
      <div>
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
    )
  }
}