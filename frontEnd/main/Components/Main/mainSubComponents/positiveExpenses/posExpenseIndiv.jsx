import React from 'react';

const PosExpenseIndiv = (props) =>{
  // console.log(props)
return (
  <div className="posMapInnerContainer">
    <div className="mapInnerMain">Name: {props.info[0]} |  {props.info[1]} <i className="fa fa-times-circle" aria-hidden="true" onClick={()=>props.deleteExpense('Positive',props.info[1],props.index)}></i></div>
  </div>
)
}

export default PosExpenseIndiv;