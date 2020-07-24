import React from 'react';


const Weather = (props) =>{
  return (
    <div className="weatherContainer">
      <div className="weatherContainerTitle">Current Local Weather</div>
      <div className="weatherContent"> <span className="weatherContainerStatus">{props.weatherStatus}</span><span className="weatherContainerTemp">{props.weatherTemp}</span></div>
    </div>
  )
}

export default Weather;