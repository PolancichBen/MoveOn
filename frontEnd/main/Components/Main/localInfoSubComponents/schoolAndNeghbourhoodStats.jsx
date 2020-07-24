import React from 'react';
import Schools from './localInfoSubComponents/schools.jsx'

const SchoolAndNeighbourhood = (props) =>(
  props.schools.map((school,i)=>{
    return (
      <div key={i} className="schoolContainer">
        <Schools info={school}/>
      </div>
    )
  })
)

export default SchoolAndNeighbourhood;