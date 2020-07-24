import React from 'react';

const AverageInfo = (props) =>{
  console.log('Average Info Props',props)
  // let moneyDescription = props.avgs[2].subString(0,28) ? props : 'Waiting';
  // let money = parseInt(props.avgs[3]).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) ? props : 'Waiting';
  return (
    <div>
      <div>{props.avgs[0]}</div>
      <div>{props.avgs[1]}</div>
      <div>{props.avgs[2]}</div>
      <div>{props.avgs[3]}</div>
    </div>
  )
}

export default AverageInfo;