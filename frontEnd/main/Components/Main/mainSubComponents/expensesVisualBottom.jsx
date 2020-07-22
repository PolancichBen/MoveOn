import React from 'react';
import NegExpensesMap from './negativeExpenses/negExpensesMap.jsx';
import PosExpensesMap from './positiveExpenses/posExpensesMap.jsx';

const ExpensesBottom = (props) =>{
  return (
    <div className="expensesContainer">
      <div className="expensesNegativeMapContainer">
        <div>
          <p> DEBITS (-) </p>
        </div>
        {/* - map Component */}
        <NegExpensesMap negExpenses={props.negExpenses}/>
      </div>
      <div className="expensesPositiveMapContainer">
        <div>
        <p> CREDITS (+) </p>
        </div>
        {/* + map Component */}
        <PosExpensesMap posExpenses={props.posExpenses}/>
      </div>
    </div>
  )
}

export default ExpensesBottom;