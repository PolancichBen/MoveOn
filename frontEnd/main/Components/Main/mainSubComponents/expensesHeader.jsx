import React from 'react';

const ExpensesHeader = (props) => {
  console.log(props)
  return (
    <div className="expensesMain">
          {/* Constants */}
        <div className="constantBillsMain">
          {/* Plus Total */}
          <div className="constant pos">
            <span>${(props.positive + props.debits)}</span>
          </div>
          {/* Minus Total */}
          <div className="constant neg">
          <span>${props.negative}</span>
          </div>
        </div>
          {/* Dynamics */}
        <div className="dynamicBillsMain">
          {/* Take Home Yrly */}
          <div className="dynamic">
            ${(props.positive + props.debits) - props.negative} /yr
          </div>
          {/* Take Home Monthly */}
          <div className="dynamic">
          ${Math.round(((props.positive + props.debits) - props.negative) / 12)} /mo
          </div>
          {/* Take Home Weekly */}
          <div className="dynamic">
          ${Math.round(((props.positive + props.debits) - props.negative) / 52)} /wk
          </div>
          {/* Take Home Daily */}
          <div className="dynamic">
          ${Math.round(((props.positive + props.debits) - props.negative) / 365)} /dy
          </div>
        </div>
    </div>
  )
}

export default ExpensesHeader;