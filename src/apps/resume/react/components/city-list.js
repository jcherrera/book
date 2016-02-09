MyComponents.City = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-content">
        <span className="card-title">{this.props.city.name.toUpperCase()} </span>

          <div className="col s6">
            <div className="card light blue">
              <div className="card-content white-text">
                <h5>Currently: </h5>
                  <p>{this.props.city.daily.summary}</p>
                <h5>Forecast: </h5>
                <ul>
                  <li><h6><b>Temperature:</b> {this.props.city.currently.temperature} deg</h6></li>
                  <li><h6><b>Precipitation:</b> {this.props.city.currently.precipProbability}%</h6></li>
                  <li><h6><b>Humidity:</b> {this.props.city.currently.humidity}%</h6></li>
                  <li><h6><b>Conditions:</b> {this.props.city.currently.summary}</h6></li>
                  <li><h6><b>Wind:</b> {this.props.city.currently.windSpeed} mph</h6></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">

        {cityElements}

        </div>
      </div>
    );
  }
});