import React from 'react';

const NegExpensesMap = (props) => (
  // Map through Neg Expenses array
  props.negExpenses.map((expense,i) => {
    return (
      <div key={i}>
        Each Neg Expenses Go!
      </div>
    )
  })
)

export default NegExpensesMap;