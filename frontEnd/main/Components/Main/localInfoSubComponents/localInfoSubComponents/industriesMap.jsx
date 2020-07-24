import React from 'react';
import IndivIndustry from './indivIndustry.jsx'

const IndustryMap = (props) =>(
  // console.log('Industry props',props),
  props.industryInfo.map((industry,i)=>{
    return (
      <div key={i} className="industryMapContainer">
        <IndivIndustry info={industry} />
      </div>
    )
  })
)

export default IndustryMap;