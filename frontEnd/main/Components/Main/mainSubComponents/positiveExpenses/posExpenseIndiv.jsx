import React from 'react';

const PosExpenseIndiv = (props) =>{
return (
  <div className="posMapInnerContainer">
    <div className="mapInnerMain">Name: {props.info[0]} |  {props.info[1]} <i onClick={()=>props.deleteExpense()}>X</i></div>
  </div>
)
}

export default PosExpenseIndiv;