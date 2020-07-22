import React from 'react';
import Options from './rightMainSubComponents/options.jsx'

const RightMain = (props) =>{
  return (
    <div className="rightMainInnerContainer">
      <div className="weatherAPIContainer">
        {/* Weather Api Area */}
        Weather API Area
      </div>
      <div className="weatherToOptionsSpacer"></div>
      <div className="optionsContainer">
        {/* Options Main */}
        <Options addDebit={props.addDebit} addCredit={props.addCredit}/>
      </div>
      <div className="optionsToMoveOnBTNSpacer"></div>
      <div className="moveOnBtn">
        {/* Move On Button */}
        Move On BTN
      </div>
    </div>
  )
}

export default RightMain;