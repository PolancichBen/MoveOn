import React from 'react';
import ExpensesHeader from './mainSubComponents/expensesHeader.jsx';
import ExpensesBottom from './mainSubComponents/expensesVisualBottom.jsx';

const BillsMain = (props) =>{
  return (
    <div>
      <div className="expensesHeader">
      {/* Header Main */}
      <ExpensesHeader positive={props.salary} debits={props.debits} negative={props.negative}/>
      </div>
      <div className="spacer">
      </div>
      <div className="expensesBottomContainer">
      {/* Expense Report */}
      <ExpensesBottom posExpenses={props.expensesArr} deleteExpense={props.deleteExpense} negExpenses={props.debitsArr} />
      </div>
    </div>
  )
}

export default BillsMain;