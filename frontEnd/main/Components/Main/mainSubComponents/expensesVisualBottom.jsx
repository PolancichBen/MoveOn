import React from 'react';
import NegExpensesMap from './negativeExpenses/negExpensesMap.jsx';
import PosExpensesMap from './positiveExpenses/posExpensesMap.jsx';

const ExpensesBottom = (props) =>{
  return (
    <div className="expensesContainer">
      <div className="expensesNegativeMapContainer">
        <div className="bottomExpenseTitles">
          <span> DEBITS (-) </span>
        </div>
        {/* - map Component */}
        <NegExpensesMap deleteExpense={props.deleteExpense} negExpenses={props.negExpenses}/>
      </div>
      <div className="expensesPositiveMapContainer">
        <div className="bottomExpenseTitles">
        <span> CREDITS (+) </span>
        </div>
        {/* + map Component */}
        <PosExpensesMap deleteExpense={props.deleteExpense} posExpenses={props.posExpenses}/>
      </div>
    </div>
  )
}

export default ExpensesBottom;