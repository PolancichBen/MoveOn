import React from 'react';

const Options = (props) =>{
  return (
    <div>
      <div>
      Options Title Go!
      </div>
      <div>
        <button onClick={()=>props.addCredit()}> Add a New Credit or (+)</button>
      </div>
      <div>
        <button onClick={()=>props.addDebit()}> Add a New Debit/Bill or (-)</button>
      </div>
    </div>
  )
}

export default Options;