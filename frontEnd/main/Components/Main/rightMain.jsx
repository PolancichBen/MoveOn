import React from 'react';
import Options from './rightMainSubComponents/options.jsx';
import Weather from './rightMainSubComponents/weather.jsx';

const RightMain = (props) =>{
  return (
    <div className="rightMainInnerContainer">
      <div className="weatherAPIContainer">
        {/* Weather Api Area */}
        <Weather weatherTemp={props.weatherTemp} weatherStatus={props.weatherStatus}/>
        
      </div>
      <div className="weatherToOptionsSpacer"></div>
      <div className="optionsContainer">
        {/* Options Main */}
        <Options addDebit={props.addDebit} addCredit={props.addCredit}/>
      </div>
      <div className="optionsToMoveOnBTNSpacer"></div>
      <div className="moveOnBtnContainer">
        {/* Move On Button */}
        <div className="moveOnTitle">
        Ready To Move On?
        </div>
        <button className="moveOnBtn" onClick={(event)=>props.moveOn(event)}>Move On!</button>
      </div>
    </div>
  )
}

export default RightMain;