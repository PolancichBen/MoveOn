import React from 'react';

const financial=(x)=>{
  return Number.parseFloat(x).toFixed(2);
}

const Schools = (props) =>{
  // console.log('Schools Props',props)
  return (
    <div className="schoolInnerMain">
      <div className="schoolName"><span>{props.info.name}</span></div>
      <div className="schoolEDLevels"><span>{props.info.educationLevel}</span></div>
      <div className="schoolDistance"><span>{(financial(props.info.distance.value))} Miles</span></div>
    </div>
  )
}

export default Schools;