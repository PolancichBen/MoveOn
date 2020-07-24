import React from 'react';

const Move = (props) => {
  return (
    <div className="moveMainContainer">
      <div className="moveTitleContainer">
        {/* Closing Button Title */}
        <div className="moveTitle">Time to Move On!</div>
      </div>
      <div className="moveMainTwoBtnContainer">
        <div className="moveMainTwoBtnMain">
          {/* Start Over Btn */}
          <button className="moveMainTwoBtn" onClick={(event) => props.startOver(event)}> Start Over </button>
        </div>
        <div className="moveMainTwoBtnMain">
          {/* Change Location Button */}
          <button className="moveMainTwoBtn" onClick={(event) => props.changeLocal(event)}>Change Location</button>
        </div>
      </div>
      <div className="moveMainCSV">
        {/* Download as .Csv Btn */}
        <button className="moveMainCSVBtn" onClick={(event) => props.cSV(event)}> Download as .CSV </button>
      </div>
    </div>
  )
}

export default Move;