import React from 'react';
import NegExpensesMap from './negativeExpenses/negExpensesMap.jsx';
import PosExpensesMap from './positiveExpenses/posExpensesMap.jsx';

const ExpensesBottom = () =>{
  return (
    <div className="expensesContainer">
      <div className="expensesNegativeMapContainer">
        {/* - map Component */}
        <NegExpensesMap />
      </div>
      <div className="expensesPositiveMapContainer">
        {/* + map Component */}
        <PosExpensesMap />
      </div>
    </div>
  )
}

export default ExpensesBottom;