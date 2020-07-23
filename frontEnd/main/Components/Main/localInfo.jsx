import React from 'react';
import LocalReviews from './localInfoSubComponents/localReviews.jsx';
import SchoolAndNeighbourhood from './localInfoSubComponents/schoolAndNeghbourhoodStats.jsx';
import TaxesAndCrime from './localInfoSubComponents/taxesAndCrime.jsx';



const LocalInfo = (props) => {
  return (
    <div className="localInfoInnerContainer">
      <div className="localInfoTitle">
        <p>{props.cityName}</p>
      </div>
      <div className="localInfoReviewsContainer">
        <LocalReviews />
      </div>
      <div className="localInfoSchoolAndNeighbourHoodContainer">
        <SchoolAndNeighbourhood />
      </div>
      <div className="localInfoTaxesAndCrimeContainer">
        <TaxesAndCrime />
      </div>
    </div>
  )
}

export default LocalInfo;