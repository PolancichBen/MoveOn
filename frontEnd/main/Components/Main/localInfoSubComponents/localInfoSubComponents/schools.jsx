import React from 'react';

const financial=(x)=>{
  return Number.parseFloat(x).toFixed(2);
}

const Schools = (props) =>{
  console.log('Schools Props',props)
  return (
    <div>
      <div><span>{props.name}</span></div>
      <div><span>{props.educationLevel}</span></div>
      <div><span>{(financial(props.distance.value))} Miles</span></div>
    </div>
  )
}

export default Schools;