import React from 'react';
import NegExpenseIndiv from './negExpenseIndiv.jsx'

const NegExpensesMap = (props) => (
  // Map through Neg Expenses array
  props.negExpenses.map((expense,i) => {
    return (
      <div key={i}>
        <NegExpenseIndiv info={expense} />
      </div>
    )
  })
)

export default NegExpensesMap;