import React from 'react';

const NegExpenseIndiv = (props) => {
  return (
    <div className="negMapInnerContainer">
      <div className="mapInnerMain">Name: {props.info[0]} |  {props.info[1]}<i className="fa fa-times-circle" aria-hidden="true" onClick={() => props.deleteExpense('Negative',props.info[1],props.index)}></i></div>
    </div>
  )
}

export default NegExpenseIndiv;