import React from 'react';

const Options = (props) =>{
  return (
    <div className="optionsContainer">
      <div className="optionsTitle">
      Add your Bills, Rent, Insurances and Credits
      </div>
      <div className="optionsButtonsContainer">
      <div className="optionsButtonMain">
        <button className="optionsButton" onClick={()=>props.addCredit()}> Add a New Credit or (+)</button>
      </div>
      <div className="optionsButtonMain">
        <button className="optionsButton" onClick={()=>props.addDebit()}> Add a New Debit/Bill or (-)</button>
      </div>
      </div>
    </div>
  )
}

export default Options;