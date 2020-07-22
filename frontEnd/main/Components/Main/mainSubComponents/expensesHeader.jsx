import React from 'react';

const ExpensesHeader = (props) => {
  return (
    <div className="expensesMain">
          {/* Constants */}
        <div className="constantBillsMain">
          {/* Plus Total */}
          <div className="constant">
            <span>{props.positive}</span>
          </div>
          {/* Minus Total */}
          <div className="constant">
          <span>{props.negative}</span>
          </div>
        </div>
          {/* Dynamics */}
        <div className="dynamicBillsMain">
          {/* Take Home Yrly */}
          <div className="dynamic">
            {props.positive - props.negative}
          </div>
          {/* Take Home Monthly */}
          <div className="dynamic">
          {Math.round((props.positive - props.negative) / 12)}
          </div>
          {/* Take Home Weekly */}
          <div className="dynamic">
          {Math.round((props.positive - props.negative) / 52)}
          </div>
          {/* Take Home Daily */}
          <div className="dynamic">
          {Math.round((props.positive - props.negative) / 365)}
          </div>
        </div>
    </div>
  )
}

export default ExpensesHeader;