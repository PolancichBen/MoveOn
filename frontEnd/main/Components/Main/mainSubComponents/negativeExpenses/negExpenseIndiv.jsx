import React from 'react';

const NegExpenseIndiv = (props) => {
  return (
    <div className="negMapInnerContainer">
      <div className="mapInnerMain">Name: {props.info[0]} |  {props.info[1]}<i onClick={() => props.deleteExpense()}>X</i></div>
    </div>
  )
}

export default NegExpenseIndiv;