import React from 'react';

const Move = (props) =>{
  return (
    <div>
      <div>
        {/* Closing Button Title */}
        <h1>Time to Move On!</h1>
      </div>
      <div>
        {/* Start Over Btn */}
        <button onClick={(event)=>props.startOver(event)}> Start Over </button>
      </div>
      <div>
        {/* Download as .Csv Btn */}
        <button onClick={(event)=>props.cSV(event)}> Download as .CSV </button>
      </div>
      <div>
        {/* Change Location Button */}
        <button onClick={(event)=>props.changeLocal(event)}>Change Location</button>
      </div>
    </div>
  )
}

export default Move;