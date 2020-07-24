import React from 'react';


const IndivIndustry = (props) =>{
  console.log('Indiv Industries Props',props)
  let description = props.info.description.substring(2);
  let percent = parseInt(props.info.value);
  return (
    <div className="indivIndustryInnerContainer">
      <span className="indivIndustryDescription">{description}</span>
      <span className="indivIndustryPercent"> {percent}</span>
    </div>
  )
}

export default IndivIndustry;