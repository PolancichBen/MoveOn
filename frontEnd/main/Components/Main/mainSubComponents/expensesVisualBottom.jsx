import React from 'react';
import NegExpensesMap from './negativeExpenses/negExpensesMap.jsx';
import PosExpensesMap from './positiveExpenses/posExpensesMap.jsx';

const ExpensesBottom = (props) =>{
  return (
    <div className="expensesContainer">
      <div className="expensesNegativeMapContainer">
        <div>Neg Title</div>
        {/* - map Component */}
        <NegExpensesMap negExpenses={props.negExpenses}/>
      </div>
      <div className="expensesPositiveMapContainer">
        <div>Pos Title</div>
        {/* + map Component */}
        <PosExpensesMap posExpenses={props.posExpenses}/>
      </div>
    </div>
  )
}

export default ExpensesBottom;