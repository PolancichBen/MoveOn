import React from 'react';
import ExpensesHeader from './mainSubComponents/expensesHeader.jsx';
import ExpensesBottom from './mainSubComponents/expensesVisualBottom.jsx';

const BillsMain = (props) =>{
  return (
    <div>
      <div className="expensesHeader">
      {/* Header Main */}
      <ExpensesHeader positive={props.positive} negative={props.negative}/>
      </div>
      <div className="spacer">
      </div>
      <div className="expensesBottomContainer">
      {/* Expense Report */}
      <ExpensesBottom posExpenses={props.debitsArr} negExpenses={props.expensesArr} />
      </div>
    </div>
  )
}

export default BillsMain;