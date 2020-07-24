import React from 'react';
import LocalReviews from './localInfoSubComponents/localReviews.jsx';
import SchoolAndNeighbourhood from './localInfoSubComponents/schoolAndNeghbourhoodStats.jsx';
import TaxesAndCrime from './localInfoSubComponents/taxesAndCrime.jsx';



const LocalInfo = (props) => {
  console.log('Local Info Main props',props)
  return (
    <div className="localInfoInnerContainer">
      <div className="localInfoTitleContainer">
        <span className="localInfoTitle">{props.cityName}</span>
      </div>
      <div className="localInfoReviewsContainer">
        <LocalReviews localInformation={props.localInformation}/>
      </div>
      <div className="localInfoSchoolAndNeighbourHoodContainer">
      <div className="schoolTitle">Nearby Schools</div>
        <SchoolAndNeighbourhood schools={props.schoolInformation}/>
      </div>
      <div className="localInfoTaxesAndCrimeContainer">
        <TaxesAndCrime taxes={props.taxInformation} crime={props.crimeLevel}/>
      </div>
    </div>
  )
}

export default LocalInfo;