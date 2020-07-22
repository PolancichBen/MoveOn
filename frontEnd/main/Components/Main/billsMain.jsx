import React from 'react';
import ExpensesHeader from './mainSubComponents/expensesHeader.jsx';
import ExpensesBottom from './mainSubComponents/expensesVisualBottom.jsx';

const BillsMain = () =>{
  return (
    <div>
      <div className="expensesHeader">
      {/* Header Main */}
      <ExpensesHeader />
      </div>
      <div className="spacer">
      </div>
      <div className="expensesBottomContainer">
      {/* Expense Report */}
      <ExpensesBottom posExpendes={'[+]'} negExpenses={'[-]'} />
      </div>
    </div>
  )
}

export default BillsMain;