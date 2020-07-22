import React from 'react';
import PosExpenseIndiv from './posExpenseIndiv.jsx';

const PosExpensesMap = (props) => (
  // Map through Neg Expenses array
  props.posExpenses.map((expense,i) => {
    return (
      <div key={i}>
        <PosExpenseIndiv info={expense} />
      </div>
    )
  })
)

export default PosExpensesMap;