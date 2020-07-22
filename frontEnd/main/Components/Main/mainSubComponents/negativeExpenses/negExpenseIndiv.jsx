import React from 'react';

const NegExpenseIndiv = (props) =>{
  console.log('indiv',props)
return (
  <div>
  <div>Name: {props.info[0]} |  {props.info[1]}</div>
  </div>
)
}

export default NegExpenseIndiv;