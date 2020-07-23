import React from 'react';


const Weather = (props) =>{
  return (
    <div>
      <div><span>Current Local Weather</span></div>
      <div><span>{props.weatherTemp}</span></div>
      <div><span>{props.weatherStatus}</span></div>
    </div>
  )
}

export default Weather;