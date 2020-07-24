import React from 'react';
import AverageInfo from './localInfoSubComponents/averageInfo.jsx';
import IndustryMap from './localInfoSubComponents/industriesMap.jsx';

const LocalReviews = (props) => {
  console.log('Local Information Props', props)
  return (
    <div className="localReviewsInnerMain">
      <div className="localReviewsTitle">Travel and Income Information</div>
      <div className="localReviewsAverageContainer">{/* Average Info */}
        <AverageInfo avgs={props.localInformation} />
      </div>
        <div className="localReviewsIndustryMapContainerTitle">Local Industry Percentages</div>
      <div className="localReviewsIndustryMapContainer">{/* Industries map */}
        <IndustryMap industryInfo={props.localInformation[4]} />
      </div>
    </div>
  )
}

export default LocalReviews;