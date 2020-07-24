import React from 'react';
import AverageInfo from './localInfoSubComponents/averageInfo.jsx';
import IndustryMap from './localInfoSubComponents/industriesMap.jsx';

const LocalReviews = (props) =>{
  console.log('Local Information Props',props)
  return (
    <div>
      Information GO!
    <div>{/* Average Info */}
    <AverageInfo avgs={props.localInformation}/>
    </div>  
    <div>{/* Industries map */}
    <IndustryMap industryInfo={props.localInformation[4]}/>
    </div>
    </div>
  )
}

export default LocalReviews;