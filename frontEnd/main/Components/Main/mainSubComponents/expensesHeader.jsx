import React from 'react';

const ExpensesHeader = () => {
  return (
    <div className="expensesMain">
          {/* Constants */}
        <div className="constantBillsMain">
          {/* Plus Total */}
          <div className="constant"></div>
          {/* Minus Total */}
          <div className="constant"></div>
        </div>
          {/* Dynamics */}
        <div className="dynamicBillsMain">
          {/* Take Home Yrly */}
          <div className="dynamic"></div>
          {/* Take Home Monthly */}
          <div className="dynamic"></div>
          {/* Take Home Weekly */}
          <div className="dynamic"></div>
          {/* Take Home Daily */}
          <div className="dynamic"></div>
        </div>
    </div>
  )
}

export default ExpensesHeader;