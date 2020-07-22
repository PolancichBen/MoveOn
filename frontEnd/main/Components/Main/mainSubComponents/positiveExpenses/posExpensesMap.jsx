import React from 'react';

const PosExpensesMap = (props) => (
  // Map through Neg Expenses array
  props.posExpenses.map((expense,i) => {
    return (
      <div key={i}>
        Each Pos Expenses Go!
      </div>
    )
  })
)

export default PosExpensesMap;