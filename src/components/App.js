import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";
import ForecastSummaries from "./ForecastSummaries";

const App = ({ props }) => {
  const { forecast, location } = props;
  return (
    <div className="App">
      <h1> Weather App</h1>
      <div className="forecast">
        <LocationDetails city={location.city} country={location.country} />
        <ForecastSummary
          date={date}
          description={description}
          icon={icon}
          temperature={temperature}
        />
        <ForecastSummaries forecast={forecast} />
      </div>
    </div>
  );
};

App.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.number,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
