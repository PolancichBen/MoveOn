import React from 'react';

const NegExpenseIndiv = (props) => {
  return (
    <div>
      <div>Name: {props.info[0]} |  {props.info[1]}<i onClick={() => props.deleteExpense()}>X</i></div>
    </div>
  )
}

export default NegExpenseIndiv;